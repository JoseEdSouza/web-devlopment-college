import uvicorn

from dotenv import load_dotenv

if __name__ == '__main__':
    
    load_dotenv()
    
    uvicorn.run("server.app:app", host="0.0.0.0", port=8007, reload=True)