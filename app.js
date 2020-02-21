const express = require('express');

let app = express();

// Subindo um servidor com Express

app.get('/', (req, res) => res.send('Olá Mundo!'));
app.get('/contatos', (req, res) => res.send({nome: 'Luiz', idade: 22}));

// Rotas parametrizadas

app.get('/produtos/:id', (req, res) => {
    let id = req.params.id;
    // usando desestruturação let {id} = req.params;
    console.log('Eu tenho um produto com o id: ' + id);
    res.send('Eu tenho um produto com o id: ' + id);
});

// ***SERVIDOR***
app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))



