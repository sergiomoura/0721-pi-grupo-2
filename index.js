// Criar um servidor express (app)
const express = require("express");

const path = require('path');
//importando o homeRouter 
const homeRouter = require('./router/homeRouter')
const app = express();
//defini que a view wngine sera ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
//  Fazer com que ele use o homeRouter
app.use ('/', homeRouter);
//
//  fazer o servidor rodar na porta 3000
app.listen (3000);