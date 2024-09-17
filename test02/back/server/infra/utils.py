import os

def get_env_var(var:str) -> str:
    """
    Get the value of an environment variable.
    """
    if env_var := os.environ.get(var):
        return env_var
    
    raise ValueError(f"Environment variable {var} not set.")