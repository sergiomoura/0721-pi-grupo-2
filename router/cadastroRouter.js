const express = require('express');
const cadastroController = require('../controller/cadastroController');
const router = express.Router();

router.get('/cadastro', cadastroController.showCadastro);

router.post('/cadastro', cadastroController.cadastro);

//Exportando o roteador:
module.exports = router;