//TODO: implementar as rotas para as páginas HTML e Banco de Dados
const express = require('express');
const router = express.Router();
const tccController = require('./tcc.Controller.js');
const pool = require('./db.js');

//rota TESTE
router.get("/teste1", tccController.teste);
//Rota página HTML
router.get("/handly", tccController.html);
//Rota cadastro cliente
router.post("/salvarClientes", tccController.clientes);
//Rota cadastro de Prestador
router.post("/salvarPrestador", tccController.prestadores);
//Rota login clientes
router.post("/loginCliente", tccController.loginCliente);
//Rota login prestadore
router.post("/loginPrestador", tccController.loginPrestador);

module.exports = router