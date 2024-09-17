from sqlalchemy import String, NUMERIC
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from server.infra.db.definitions import Base


class Student(Base):
    __tablename__ = "students"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(50), nullable=False)
    major: Mapped[str] = mapped_column(String(50), nullable=False)
    ira: Mapped[float] = mapped_column(NUMERIC(5, 2), nullable=False)
