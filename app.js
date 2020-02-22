// importando módulo express
const express = require('express');
// ^ fim=================================================================================

// importando rotasProdutos 
const rotasProdutos = require('./routes/rotasProdutos')
// ^ fim=================================================================================

// atribuindo função do express
let app = express();
// ^ fim=================================================================================

// Subindo um servidor com Express
app.get('/', (req, res) => res.send('Olá Mundo!'));
app.get('/contatos', (req, res) => res.send({nome: 'Luiz', idade: 22}));
// ^ fim=================================================================================

// Rotas parametrizadas
// app.get('/produtos/:id', (req, res) => {
    // let id = req.params.id;
    // usando desestruturação let {id} = req.params;
    // console.log('Eu tenho um produto com o id: ' + id);
    // res.send('Eu tenho um produto com o id: ' + id);
// });
// ^^^^^^^^^^^^^^^^^^^^^^^^ Usando o Sistema de Roteamento esse código acima é substituído pelo código abaixo que liga todo caminho da "seção" /produtos ao arquivo ./routes/rotasProdutos que contém todas as rotas da seção.

app.use('/produtos', rotasProdutos);

// Teste exercício - rota parametrizada - mostrar
var series = [{nome: 'um', temp: 3}, {nome: 'dois', temp: 1}, {nome: 'tres', temp: 4}];

app.get('/serie/:id', (req, res) => {
    let {id} = req.params;
    // usando desestruturação let {id} = req.params;
    console.log(series[id]);
    res.send(series[id]);
});
// ^ fim=================================================================================

//                                  ***SERVIDOR***
app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))
// ^ fim=================================================================================


