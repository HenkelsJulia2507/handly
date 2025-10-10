//TODO: implementar as rotas para as páginas HTML e Banco de Dados
const express = require('express');
const router = express.Router();
const tccController = require('../../tcc.Controller.js');
const pool = require('./bd.js');

//rota TESTE
router.get("/teste1", tccController.teste);
//Rota página HTML
router.get("/handly", tccController.html);
//Rota cadastro cliente
router.post("/salvar", tccController.post)

module.exports = router