from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Annotated
from contextlib import asynccontextmanager

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Allows specific origins
    allow_credentials=True,
    # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_methods=["*"],
    allow_headers=["*"],              # Allows all headers
)


class Task(SQLModel, table=True):
  id: int | None = Field(default=None, primary_key=True)
  text: str | None = Field(default=None, index=True)
  completed: bool | None = Field(default=None, index=True)


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
  SQLModel.metadata.create_all(engine)


def get_session():
  with Session(engine) as session:
    yield session


SessionDep = Annotated[Session, Depends(get_session)]


@app.on_event("startup")
def on_startup():
  create_db_and_tables()


# @asynccontextmanager
# async def lifespan(app: FastAPI):
#   create_db_and_tables()


@app.get("/tasks")
def get_tasks(session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100) -> list[Task]:
  tasks = session.exec(select(Task).offset(offset).limit(limit)).all()
  return tasks


@app.post("/tasks")
def create_task(task: Task, session: SessionDep) -> Task:
  session.add(task)
  session.commit()
  session.refresh(task)
  return task


@app.patch("/tasks/{id}")
def update_task(id: int, patch: Task, session: SessionDep) -> Task:
  task = session.get(Task, id)
  if not task:
    raise HTTPException(status_code=404, detail="Task not found")
  task.sqlmodel_update(patch.model_dump(exclude_unset=True))

  session.add(task)
  session.commit()
  session.refresh(task)
  return task


@app.delete("/tasks/{id}")
def delete_task(id: int, session: SessionDep) -> Task:
  task = session.get(Task, id)
  if not task:
    raise HTTPException(status_code=404, detail="Task not found")

  session.delete(task)
  session.commit()
  # We shouldn't refresh since the task is not in the db anymore
  return task
