from sqlalchemy import URL
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase

from server.infra.utils import get_env_var


def create_conn_url() -> URL:
    return URL.create(
        drivername=get_env_var("DB_DRIVER"),
        username=get_env_var("DB_USERNAME"),
        password=get_env_var("DB_PASSWORD"),
        host=get_env_var("DB_HOST"),
        port=int(get_env_var("DB_PORT")),
        database=get_env_var("DB_NAME"),
    )


class DBSessionWrapper:
    _instance: async_sessionmaker[AsyncSession] | None = None

    def get_or_create(self) -> AsyncSession:
        if self._instance is None:
            db_url = create_conn_url()
            engine = create_async_engine(db_url)
            self._instance = async_sessionmaker(engine)
        return self._instance()


local_session = DBSessionWrapper()


class Base(DeclarativeBase):
    pass
