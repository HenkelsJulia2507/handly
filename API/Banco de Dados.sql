CREATE DATABASE api;
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE prestadores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

SELECT * FROM clientes;
SELECT * FROM prestadores;

-- Controladores para teste
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS prestadores;
DROP DATABASE IF EXISTS api;
