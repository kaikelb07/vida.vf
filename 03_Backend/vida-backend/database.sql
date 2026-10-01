CREATE DATABASE vida;

-- Execute the commands below after connecting to the 'vida' database.

CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE
);

CREATE TABLE exames (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    nome VARCHAR(100) NOT NULL,
    valor NUMERIC(10,2),
    unidade VARCHAR(20),
    data_exame DATE NOT NULL,

    CONSTRAINT fk_paciente
        FOREIGN KEY (paciente_id)
        REFERENCES pacientes(id)
        ON DELETE CASCADE
);
