const {sequelize} = require('../database/models');
const paginasController = {
    // A função showLogin vai ser usada no loginController!!!
    // showLogin:(req,res)=>{
    //     res.render('login.ejs')
    // },
    showHome: async (req,res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        return res.render('home.ejs',{produtos});
    },
    // showHomeSkincare: async (req,res) => {
    //     let sql = `SELECT * FROM produtos`;
    //     let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
    //     return res.render('home.ejs',{produtos});
    // },
    // showHomeRosto: async (req,res) => {
    //     let sql = `SELECT * FROM produtos`;
    //     let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
    //     return res.render('home.ejs',{produtos});
    // },
    showListagem:(req,res)=>{
        res.render('listagemProduto.ejs')
    },
    showProdutoInterno: async (req,res)=>{
        let id = req.params.id;
        let sql = `SELECT * FROM produtos WHERE id = ${id}`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        let produto = produtos[0];
        res.render('produtoInterno.ejs',{produto});
    },
    adicionarCarrinho: async (req, res)=>{
        let {id,inputQtd} = req.body;

        let sql = `SELECT * FROM produtos WHERE id = ${id}`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        let produto = produtos[0];
        produto.qtd = inputQtd; 
        console.log(produto);
        if (req.session.carrinho) {
            req.session.carrinho.push(produto);
        } else {
            req.session.carrinho = [produto];
        }
        res.redirect('/carrinho');
    },
    showCarrinho: async (req, res)=>{
        let produtos = req.session.carrinho;
        let total = 0;
        for (const p of produtos) {
            total = total + (p.preco * p.qtd);
        }
        return res.render('carrinho.ejs',{produto:req.session.carrinho, total});
    },
    
    showFinalizacao:(req, res)=>{
        res.render('finalizacao.ejs')
    },
    showPainel:(req, res)=>{
        res.render('painelDeUsuario.ejs')
    },
    showCadastro:(req,res)=>{
        res.render('cadastro.ejs')
    }

}

module.exports = paginasController;
