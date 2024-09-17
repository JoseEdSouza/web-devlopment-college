from http import HTTPStatus
from http.client import HTTPException
from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from server.domain.student import repository
from server.domain.student.dtos.response import (
    AllStudentResponse,
    SingleStudentResponse,
)
from server.domain.student.model.student import Student
from server.infra.db import get_db_session
from server.infra.exception import EntityNotFoundError

student_router = APIRouter(tags=["Student"])


@student_router.get("")
async def list_all(
    session: Annotated[AsyncSession, Depends(get_db_session)]
) -> list[AllStudentResponse]:
    return await repository.get_all_students(session)


@student_router.get("/{student_id}")
async def get_by_id(
    student_id: int, session: Annotated[AsyncSession, Depends(get_db_session)]
) -> SingleStudentResponse:
    try:
        return await repository.get_student_by_id(student_id, session)
    except EntityNotFoundError as e:
        raise HTTPException(HTTPStatus.NOT_FOUND, str(e))
