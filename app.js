const express = require('express');

let app = express();

// Subindo um servidor com Express

app.get('/', (req, res) => res.send('Olá Mundo!'));

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))