const pool = require("../db");

async function listarExames(req, res) {
    try {
        const resultado = await pool.query(`
            SELECT exames.id, exames.nome, exames.valor, exames.unidade,
                   exames.data_exame, pacientes.nome AS paciente
            FROM exames
            INNER JOIN pacientes ON exames.paciente_id = pacientes.id
            ORDER BY exames.data_exame DESC
        `);

        res.json(resultado.rows);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar exames" });
    }
}

async function criarExame(req, res) {
    try {
        const { paciente_id, nome, valor, unidade, data_exame } = req.body;
        const resultado = await pool.query(
            `INSERT INTO exames
             (paciente_id, nome, valor, unidade, data_exame)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [paciente_id, nome, valor, unidade, data_exame]
        );

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao criar exame" });
    }
}

async function excluirExame(req, res) {
    try {
        const { id } = req.params;
        const resultado = await pool.query(
            "DELETE FROM exames WHERE id = $1 RETURNING *",
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: "Exame não encontrado" });
        }

        res.json({ mensagem: "Exame excluído com sucesso" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao excluir exame" });
    }
}

module.exports = {
    listarExames,
    criarExame,
    excluirExame
};
