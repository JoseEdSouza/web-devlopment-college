# Student API

## Como rodar o projeto

1. Clone o projeto
2. Acesse a pasta do projeto
3. Execute os seguintes comandos:

    ```bash
    pip install -r requirements.txt
    ```

4. Crie um banco de dados no postgres

    ```sql
    CREATE DATABASE prova;
    ```

5. Configure o arquivo `.env` com as informações do banco de dados

    ```env
    DB_NAME=prova
    DB_USERNAME=postgres
    DB_PASSWORD=Oppenheimer
    DB_HOST=localhost
    DB_PORT=5432
    DB_DRIVER=postgresql+asyncpg
    ```

6. execute os scripts `init.sql` e `mock-students`.sql na pasta `database` no projeto.

7. Execute o projeto

    ```bash
    python main.py
    ```

8. Acesse o endereço `http://localhost:8000/docs` para acessar a documentação da API
