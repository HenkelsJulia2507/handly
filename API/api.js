//TODO: importações
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./tcc.Routes');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'webapp')));
//Rota pagina inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'webapp', 'tela1.html'));
});

app.use("/", routes)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});