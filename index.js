<<<<<<< HEAD

// Criar um servidor express (app) 
const express = require("express"); 
const path = require('path'); 
//importando o homeRouter
  const homeRouter = require('./router/homeRouter');  
  const app = express();  
app.use(express.static(path.join(__dirname, 'public')));  
//defini que a view engine sera ejs
  app.set('view engine', 'ejs');  
  //  Fazer com que ele use o homeRouter 
  app.use('/', homeRouter); 
  //  fazer o servidor rodar na porta 3000
app.listen(8000);

=======
// Criar um servidor express (app)
const express = require("express");
const path = require('path');
//importando o homeRouter 
const homeRouter = require('./router/homeRouter');

const app = express();

// Configurando a pasta public como contenedora dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//defini que a view engine sera ejs

app.set('view engine', 'ejs');

//  Fazer com que ele use o homeRouter
app.use('/', homeRouter);
//
//  fazer o servidor rodar na porta 3000
app.listen(8000);
>>>>>>> f5b39b3ecf87ab9a9f32e9812434f9f9b594dea6
