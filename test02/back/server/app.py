from fastapi import FastAPI

from server.domain.student.controller import student_router

app = FastAPI()

app.include_router(student_router, prefix="/student")
