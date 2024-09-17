CREATE TABLE students
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(50)   NOT NULL,
    major VARCHAR(50)   NOT NULL,
    ira   NUMERIC(5, 2) NOT NULL
);