const express = require("express");
const cors = require("cors");

const pacienteRoutes = require("./routes/pacienteRoutes");
const exameRoutes = require("./routes/exameRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pacientes", pacienteRoutes);
app.use("/api/exames", exameRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API do Projeto VIDA funcionando!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
