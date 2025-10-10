//TODO: implementar o banco de dados aqui
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco',
    port: 5432
});

client.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao PostgreSQL:', err);
        return;
    }
    console.log('Conectado ao banco de dados PostgreSQL!');
});

module.exports = client;