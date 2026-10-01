const express = require("express");

const {
    listarExames,
    criarExame,
    excluirExame
} = require("../controllers/exameController");

const router = express.Router();

router.get("/", listarExames);
router.post("/", criarExame);
router.delete("/:id", excluirExame);

module.exports = router;
