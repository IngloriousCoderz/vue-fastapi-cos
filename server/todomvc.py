from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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


class CreateTaskBody(BaseModel):
  text: str
  completed: bool | None = None


class UpdateTaskBody(BaseModel):
  text: str | None = None
  completed: bool | None = None


class Task(BaseModel):
  id: int
  text: str
  completed: bool | None = None


tasks: list[Task] = [
    {"id": 1, "text": "Learn FastAPI", "completed": True},
    {"id": 2, "text": "Wire to Vue.js", "completed": False},
    {"id": 3, "text": "Profit!"}
]


@app.get("/tasks")
def get_tasks() -> list[Task]:
  return tasks


@app.post("/tasks")
def create_task(body: CreateTaskBody) -> Task:
  max_id = tasks[len(tasks) - 1]["id"] if len(tasks) else 0
  created_task: Task = body.model_dump(exclude_unset=True) | {
      "id":  max_id + 1}
  tasks.append(created_task)
  return created_task


@app.patch("/tasks/{id}")
def update_task(id: int, body: UpdateTaskBody) -> Task:
  updated_index = next((index for (index, task) in enumerate(
      tasks) if task["id"] == id), None)

  if updated_index is None:
    raise HTTPException(status_code=404, detail="Task not found")

  task = tasks[updated_index] | body.model_dump(exclude_unset=True)
  tasks[updated_index] = task
  return task


@app.delete("/tasks/{id}")
def delete_task(id: int) -> Task:
  deleted_index = next((index for (index, task) in enumerate(
      tasks) if task["id"] == id), None)

  if deleted_index is None:
    raise HTTPException(status_code=404, detail="Task not found")

  task = tasks[deleted_index]
  tasks.pop(deleted_index)
  return task
