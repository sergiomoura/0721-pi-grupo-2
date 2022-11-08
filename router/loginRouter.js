const express = require('express');
const loginController = require('../controller/loginController');
const router = express.Router();

router.get('/login', loginController.showLogin);

router.post('/login', loginController.login);

// router.get('/esqueci', loginController.mostraEsqueci);

// router.post('/esqueci', loginController.lembrarSenha);

// router.get('/admin', loginController.mostraAdmin);

//Exportando o roteador:
module.exports = router;