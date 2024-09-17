from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Session

from server.domain.student.dtos.response import (
    AllStudentResponse,
    SingleStudentResponse,
)
from server.domain.student.model.student import Student
from server.infra.exception import EntityNotFoundError


async def get_all_students(session: AsyncSession) -> list[AllStudentResponse]:
    query = select(Student).order_by(Student.id)

    students = await session.scalars(query)

    result = [
        AllStudentResponse(id=s.id, name=s.name, ira=s.ira, major=s.major)
        for s in students
    ]

    return result


async def get_student_by_id(
    student_id: int, session: AsyncSession
) -> SingleStudentResponse:
    query = select(Student).where(Student.id.__eq__(student_id))
    student = await session.scalar(query)

    if student is None:
        raise EntityNotFoundError("Estudante Não Encontrado")

    return SingleStudentResponse(
        name=student.name, major=student.major, ira=student.ira
    )
