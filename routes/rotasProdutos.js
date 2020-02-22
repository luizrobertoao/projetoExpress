// importando o módulo express
const express = require('express');
// ^ fim=============================================================================================

// Importando o módulo de roteamento da seção.
const ProdutoController = require('../controllers/ProdutoController');
// armazenando a função de roteamento.
const router = express.Router();
// ^ fim=============================================================================================

// Usando método .get para armazenar as ações(códigos) a serem executados quando a rota for requisitada(req).
// Abaixo rota sem controller
// router.get('/criar', (req, res) => res.send('Criando um produto'));
// Abaixo rota com controller
router.get('/criar', ProdutoController.criarProduto);

// Abaixo rota sem controller
// router.get('/deletar', (req, res) => res.send('Deletando um produto'));
// Abaixo rota com controller
router.get('/deletar/:id', ProdutoController.deletarProduto);

// Abaixo rota sem controller
// router.get('/detalhar/:id', (req, res) => {
    // let id = req.params.id;
    // res.send(`Eu tenho um produto com o id: ${id}`)
// });
// Abaixo rota com controller
router.get('/detalhar/:id', ProdutoController.detalharProduto);

// ^ fim=============================================================================================

// Exportando o módulo.
module.exports = router;