//QUESTION: importações
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./tcc.Routes');

app.use(express.json());
//TESTE
app.get("/", (req, res) => {
    res.send("Teste");
})
app.use("/", routes)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});