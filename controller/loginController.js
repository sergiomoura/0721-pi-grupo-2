const {sequelize} = require('../database/models');
const loginController= {
    showLogin: (req, res) => {
        res.render('login.ejs');
    },
    login: async (req, res) => {
        let sql = `SELECT * FROM clientes`;
        let clientes = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
        return res.render('home.ejs',{clientes});

      
        // let usuario = usuarios.find(
        //     u => emailDigitado == u.email && senhaDigitada == u.senha ? true : false
        // );

        // 4 - Caso não exista, dar mensagem "Usuário inexistente!"
        // Caso exista o usuário com email senha dados, retornar OK!
        // if (usuario == undefined) {
        //     res.render('login.ejs', { erro: 1 })
        // } else {
        //     req.session.usuario = usuario;
        //     res.redirect('/admin');
        // }
    },
    //direcionar o úsuario para a rota /admin;
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