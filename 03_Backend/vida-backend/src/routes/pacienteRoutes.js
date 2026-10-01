const express = require("express");

const {
    listarPacientes,
    buscarPaciente,
    criarPaciente,
    atualizarPaciente,
    excluirPaciente
} = require("../controllers/pacienteController");

const router = express.Router();

router.get("/", listarPacientes);
router.get("/:id", buscarPaciente);
router.post("/", criarPaciente);
router.put("/:id", atualizarPaciente);
router.delete("/:id", excluirPaciente);

module.exports = router;
