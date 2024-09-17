from typing import AsyncGenerator

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from server.infra.db.definitions import local_session


async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    async with local_session.get_or_create() as session:
        try:
            yield session
            await session.commit()
        except SQLAlchemyError:
            await session.rollback()
            raise