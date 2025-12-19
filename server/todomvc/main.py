from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Annotated
from contextlib import asynccontextmanager
import db
from db import Task

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


@app.on_event("startup")
def on_startup():
  db.create_db_and_tables()


# @asynccontextmanager
# async def lifespan(app: FastAPI):
#   db.create_db_and_tables()


@app.get("/tasks")
def get_tasks(offset: int = 0, limit: Annotated[int, Query(le=100)] = 100) -> list[Task]:
  tasks = db.get_tasks(offset, limit)
  return tasks


@app.post("/tasks")
def create_task(task: Task) -> Task:
  task = db.create_task(task)
  return task


@app.patch("/tasks/{id}")
def update_task(id: int, patch: Task) -> Task:
  try:
    task = db.update_task(id, patch)
  except:
    raise HTTPException(status_code=404, detail="Task not found")

  return task


@app.delete("/tasks/{id}")
def delete_task(id: int) -> Task:
  try:
    task = db.delete_task(id)
  except:
    raise HTTPException(status_code=404, detail="Task not found")
  return task
