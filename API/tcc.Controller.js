//TODO: colocar todas as rotas aqui
const db = require ("./db.js")
const path = require('path');

//rota TESTE
exports.teste = (req,res) => {
    res.send("Teste")
}

//Rota HTML
exports.html = (req, res) => {
    res.sendFile(path.join(__dirname, "tcc.html"));
};