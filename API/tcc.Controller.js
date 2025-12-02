// TODO: colocar todas as rotas aqui
const pool = require("./db.js");
const path = require("path");

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
  const { nome, telefone, estado, cidade,endereco, email, password, especialidade, descricao } = req.body;
  try {
    await pool.query(
      "INSERT INTO tabela_prestador (nome, telefone, estado, cidade, endereco, email, senha, especialidade, descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nome, telefone, estado, cidade, endereco, email, password, especialidade, descricao]
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
// Rota buscar cliente por email
exports.getCliente = async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ erro: 'email obrigatório' });

  try {
    const [rows] = await pool.query(
      'SELECT nome, telefone, estado, cidade, endereco, email FROM tabela_cliente WHERE email = ? LIMIT 1',
      [email]
    );
    if (rows.length === 0) return res.status(404).json({ erro: 'cliente não encontrado' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar cliente' });
  }
};
// Rota profissionais
exports.profissionais = async (req, res) => {
  const { especialidade } = req.query;

  try {
    let query = 'SELECT id_prestador, nome, especialidade, descricao, avaliacao FROM tabela_prestador';
    const params = [];

    if (especialidade) {
      query += ' WHERE especialidade LIKE ?';
      params.push(`%${especialidade}%`);
    }

    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar profissionais' });
  }
};

