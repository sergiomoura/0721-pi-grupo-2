// Criar um servidor express (app) 
const express = require("express"); 
const path = require('path'); 
const session = require("express-session");
//importando o homeRouter
const homeRouter = require('./router/homeRouter');  
const app = express();  
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:"pq eu quero",
  resave:true,
  saveUninitialized:true,
}));

app.use(express.static(path.join(__dirname, 'public')));  
//defini que a view engine sera ejs
app.set('view engine', 'ejs');  
  //  Fazer com que ele use o homeRouter 
app.use('/', homeRouter); 
  // //  fazer o servidor rodar na porta 3000
app.listen(8000);

 


