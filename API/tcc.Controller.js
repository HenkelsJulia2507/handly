//TODO: colocar todas as rotas aqui
const pool = require ("./db.js")
const path = require('path');

//rota TESTE
exports.teste = (req,res) => {
    res.send("Teste")
}
//Rota cadastro cliente
exports.clientes = async (req, res) => {
  const { nome, telefone, email, password } = req.body;
  try {
    await pool.query(
      'INSERT INTO clientes (nome, telefone, email, password) VALUES ($1, $2, $3, $4)',
      [nome, telefone, email, password]
     );
    res.json ({ mensagem: "Cadastro realizado com sucesso!"});
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o cadastro"});
  }
}
//Rota cadastro prestadores
exports.prestadores = async (req, res) => {
  const { nome, telefone, email, password } = req.body;
  try {
    await pool.query(
      "INSERT INTO prestadores (nome, telefone, email, password) VALUES ($1, $2, $3, $4)",
      [nome, telefone, email, password]
    );
    res.json ({ mensagem: "Cadastro realizado com sucesso!"});
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o cadastro"});
  }
}
//Rota Login clientes
exports.loginCliente = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM clientes WHERE email = $1 AND password = $2',
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ sucesso: true, mensagem: 'Login bem-sucedido' });
    } else {
      res.json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro durante login' });
  }
};
//Rota login prestador
exports.loginPrestador = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM prestadores WHERE email = $1 AND password = $2',
      [email, password]
    );
    if (rows.length > 0) {
      res.json({ sucesso: true, mensagem: 'Login bem-sucedido' });
    } else {
      res.json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro durante login' });
  }
};