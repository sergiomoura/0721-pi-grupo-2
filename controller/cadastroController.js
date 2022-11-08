const {Cliente,sequelize} = require('../database/models');
const bcrypt = require('bcrypt');

const cadastroController= {
    showCadastro: (req, res) => {
        res.render('cadastro.ejs');
    },
    cadastro: async (req, res) => {
        // let sql = `SELECT * FROM clientes`;
        // let clientes = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        // return res.render('home.ejs',{clientes});
        const { nome, email, senha, confirmacao} = req.body;

        const u = await Cliente.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10),
                endereco: null
            }
        )
      req.session.Cliente = u;

      res.redirect('/')
    },

}

module.exports = cadastroController;