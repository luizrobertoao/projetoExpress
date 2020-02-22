// Criando um controller(controlador) para a seção /produtos. Cria-se um objeto e cada propriedade deste objeto será um médoto que vai armazenar as ações(códigos) que serão executadas quando esse método for "chamado", geralmente dentro do módulo de rotas da seção. 
const ProdutoController = {
    criarProduto: (req, res) => res.send('Criando um produto'),
    deletarProduto: (req, res) => {
        let id = req.params.id;
        res.send(`Deletando o produto ${id}`);
},
    detalharProduto: (req, res) => {
        let {id} = req.params;
        res.send(`Detalhando o produto ${id}`);
    }
};
// ^ fim=============================================================================================

// exportando o módulo.
module.exports = ProdutoController;
// ^ fim=============================================================================================