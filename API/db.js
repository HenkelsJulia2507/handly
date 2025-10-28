//TODO: implementar o banco de dados aqui
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'sua_senha_aqui',   
  database: 'api',
  port: 5432           
});

module.exports = pool;
