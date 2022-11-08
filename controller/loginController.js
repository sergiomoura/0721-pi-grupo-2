const {Clientes,sequelize} = require('../database/models');
const bcrypt = require('bcrypt');

const loginController= {
    showLogin: (req, res) => {
        res.render('login.ejs');
    },
    login: async (req, res) => {
        // let sql = `SELECT * FROM clientes`;
        // let clientes = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        // return res.render('home.ejs',{clientes});
        const { nome, email, senha} = req.body;

        const u = await Clientes.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
      req.session.Clientes = u;

      res.redirect('/home')
    },
    mostrarHome: (req, res) => {
        let nome = req.session.Clientes.nome;

        res.render('home.ejs', { nome });
    },

    // mostraEsqueci: (req, res) => {
    //     res.render('esqueci.ejs')
    // },
    // lembrarSenha: (req, res) => {
    //     res.send(req.body)
    // },
    // mostraAdmin: (req, res) => {
    //     res.render('admin.ejs')
    // }

}

module.exports = loginController;