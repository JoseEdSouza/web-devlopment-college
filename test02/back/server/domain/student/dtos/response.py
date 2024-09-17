from server.infra.pydantic import CamelCaseBaseModel


class AllStudentResponse(CamelCaseBaseModel):
    id: int
    name: str
    major: str
    ira: float


class SingleStudentResponse(CamelCaseBaseModel):
    name: str
    major: str
    ira: float
