const {sequelize} = require('../database/models');
const paginasController = {
    showLogin:(req,res)=>{
        res.render('login.ejs')
    },
    showHome: async (req,res) => {
        let sql = `SELECT * FROM produtos`;
        let produtos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        return res.render('home.ejs',{produtos});
    },
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
    showCarrinho:(req, res)=>{
        res.render('carrinho.ejs')
    },
    showFinalizacao:(req, res)=>{
        res.render('finalizacao.ejs')
    },
    showPainel:(req, res)=>{
        res.render('painelDeUsuario.ejs')
    }
}

module.exports = paginasController;
