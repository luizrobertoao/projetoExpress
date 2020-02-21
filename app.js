const express = require('express');

let app = express();

// Subindo um servidor com Express

app.get('/', (req, res) => res.send('Olá Mundo!'));
app.get('/contatos', (req, res) => res.send({nome: 'Luiz', idade: 22}));

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))