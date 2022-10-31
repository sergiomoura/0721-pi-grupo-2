const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

router.get('/', homeController.showHome);
router.get('/carrinho', homeController.showCarrinho);
router.get('/login', homeController.showLogin);
router.get('/listagem', homeController.showListagem);
router.get('/produto', homeController.showProdutoInterno);
router.get('/finalizacao', homeController.showFinalizacao);
router.get('/painel' , homeController.showPainel);
module.exports = router;


