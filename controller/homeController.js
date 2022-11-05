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
    showProdutoInterno:(req,res)=>{
        res.render('produtoInterno.ejs');
        
    },
    showCarrinho:(req, res)=>{
        res.render('carrinho.ejs')
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

    // mostraCategoria:(req,res)=>{
    //     let id = req.params.id;
    // }
}

module.exports = paginasController;
