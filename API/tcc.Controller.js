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

//Rota cadastro cliente
exports.post = async (req, res) => {
    const { nome, telefone, email, password } = req.body;
    try {
        await pool.query (
            "INSERT INTO clientes (nome, telefone, email, password) VALUES (?, ?, ?, ?)",
            [nome, telefone, email, password]
        );
    res.json ({ mensagem: "Cadastro realizado com sucesso!"});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao salvar o cadastro"});
    }
}