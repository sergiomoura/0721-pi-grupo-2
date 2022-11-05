const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

router.get('/', homeController.showHome);

router.get('/login', homeController.showLogin);
router.get('/listagem', homeController.showListagem);

router.get('/produto', homeController.showProdutoInterno);
router.get('/produto/:id', homeController.showProdutoInterno);

router.get('/carrinho', homeController.showCarrinho);
router.get('/carrinho:id', homeController.showCarrinho);
router.post('/carrinho', homeController.adicionarCarrinho);

router.get('/finalizacao', homeController.showFinalizacao);
router.get('/painel' , homeController.showPainel);
module.exports = router;


