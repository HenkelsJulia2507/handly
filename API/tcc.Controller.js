// TODO: colocar todas as rotas aqui
const pool = require("./db.js");
const path = require("path");

// Rota TESTE
exports.teste = (req, res) => {
  res.send("Teste");
};

// Rota cadastro cliente
exports.clientes = async (req, res) => {
  const { nome, telefone, estado, cidade,endereco, email, password } = req.body;
  try {
    await pool.query(
      "INSERT INTO tabela_cliente (nome, telefone, estado, cidade, endereco, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nome, telefone, estado, cidade, endereco, email, password]
    );
    res.json({ mensagem: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o cadastro" });
  }
};

// Rota cadastro prestadores
exports.prestadores = async (req, res) => {
  const { nome, telefone, estado, cidade,endereco, email, password } = req.body;
  try {
    await pool.query(
      "INSERT INTO tabela_prestador (nome, telefone, estado, cidade, endereco, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nome, telefone, estado, cidade, endereco, email, password]
    );
    res.json({ mensagem: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar o cadastro" });
  }
};

// Rota login clientes
exports.loginCliente = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tabela_cliente WHERE email = ? AND senha = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ sucesso: true, mensagem: "Login bem-sucedido" });
    } else {
      res.json({ sucesso: false, mensagem: "Email ou senha inválidos" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro durante login" });
  }
};

// Rota login prestador
exports.loginPrestador = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tabela_prestador WHERE email = ? AND senha = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ sucesso: true, mensagem: "Login bem-sucedido" });
    } else {
      res.json({ sucesso: false, mensagem: "Email ou senha inválidos" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro durante login" });
  }
};
