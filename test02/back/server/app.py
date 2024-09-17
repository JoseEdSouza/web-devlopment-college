from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from server.domain.student.controller import student_router

app = FastAPI()

# config cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student_router, prefix="/student")
