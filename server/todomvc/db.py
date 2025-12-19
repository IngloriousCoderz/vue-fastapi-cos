from fastapi import Depends
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Annotated


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


def get_tasks(session=Depends(get_session), offset: int = 0, limit: int = 100) -> list[Task]:
  tasks = session.exec(select(Task).offset(offset).limit(limit)).all()
  return tasks


def create_task(task: Task, session=Depends(get_session)) -> Task:
  session.add(task)
  session.commit()
  session.refresh(task)
  return task


def update_task(id: int, patch: Task, session=Depends(get_session)) -> Task:
  task = session.get(Task, id)
  if not task:
    raise Exception(status_code=404, detail="Task not found")
  task.sqlmodel_update(patch.model_dump(exclude_unset=True))

  session.add(task)
  session.commit()
  session.refresh(task)
  return task


def delete_task(id: int, session=Depends(get_session)) -> Task:
  task = session.get(Task, id)
  if not task:
    raise Exception(status_code=404, detail="Task not found")

  session.delete(task)
  session.commit()
  # We shouldn't refresh since the task is not in the db anymore
  return task
