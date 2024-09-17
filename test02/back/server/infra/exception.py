class EntityAlreadyExistsError(Exception):
    pass


class EntityNotFoundError(Exception):
    pass


class ConstraintViolationError(Exception):
    pass


class SchemaViolationError(Exception):
    pass


class BusinessRuleViolationError(Exception):
    pass


def get_origin_exception(exc: BaseException) -> Exception:
    """
    Recursively retrieves the original exception from a chain of exceptions.

    This function navigates through the chain of exceptions, starting from the given exception,
    and returns the first exception in the chain (the original cause).

    :param exc: The exception from which to start the search.
    :return: The original exception in the chain.
    """
    return exc if (cause := exc.__cause__) is None else get_origin_exception(cause)