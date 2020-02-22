const express = require('express');
const router = express.Router();

router.get('/criar', (req, res) => res.send('Criando um produto'));

router.get('/deletar', (req, res) => res.send('Deletando um produto'));

router.get('/detalhar/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Eu tenho um produto com o id: ${id}`)
});

module.exports = router;