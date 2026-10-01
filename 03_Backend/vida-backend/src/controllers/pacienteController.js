const pool = require("../db");

async function listarPacientes(req, res) {
    try {
        const resultado = await pool.query(
            "SELECT * FROM pacientes ORDER BY id"
        );
        res.json(resultado.rows);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar pacientes" });
    }
}

async function buscarPaciente(req, res) {
    try {
        const { id } = req.params;
        const resultado = await pool.query(
            "SELECT * FROM pacientes WHERE id = $1",
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: "Paciente não encontrado" });
        }

        res.json(resultado.rows[0]);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar paciente" });
    }
}

async function criarPaciente(req, res) {
    try {
        const { nome, email, data_nascimento } = req.body;
        const resultado = await pool.query(
            `INSERT INTO pacientes (nome, email, data_nascimento)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [nome, email, data_nascimento]
        );

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao criar paciente" });
    }
}

async function atualizarPaciente(req, res) {
    try {
        const { id } = req.params;
        const { nome, email, data_nascimento } = req.body;
        const resultado = await pool.query(
            `UPDATE pacientes
             SET nome = $1, email = $2, data_nascimento = $3
             WHERE id = $4
             RETURNING *`,
            [nome, email, data_nascimento, id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: "Paciente não encontrado" });
        }

        res.json(resultado.rows[0]);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao atualizar paciente" });
    }
}

async function excluirPaciente(req, res) {
    try {
        const { id } = req.params;
        const resultado = await pool.query(
            "DELETE FROM pacientes WHERE id = $1 RETURNING *",
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: "Paciente não encontrado" });
        }

        res.json({ mensagem: "Paciente excluído com sucesso" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao excluir paciente" });
    }
}

module.exports = {
    listarPacientes,
    buscarPaciente,
    criarPaciente,
    atualizarPaciente,
    excluirPaciente
};
