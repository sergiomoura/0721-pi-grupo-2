const {Cliente,sequelize} = require('../database/models');
const bcrypt = require('bcrypt');

const loginController= {
    showLogin: (req, res) => {
        res.render('login.ejs');
    },
    login: async (req, res) => {
        // let sql = `SELECT * FROM clientes`;
        // let cliente = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        // return res.render('home.ejs',{cliente});
        const { email, senha} = req.body;

        let cliente = await Cliente.findOne({where:{email}});

        if (cliente == undefined){
            return res.send('email não encontrado')
        }
        if(!bcrypt.compareSync(senha, cliente.senha)){
            return res.send('senha inválida')
        }

        req.session.Cliente = cliente;
          res.redirect('/')
    },
    mostrarHome: (req, res) => {
        let nome = req.session.Cliente.nome;

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