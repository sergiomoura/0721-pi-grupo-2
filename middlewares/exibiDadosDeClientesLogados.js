function exibiDadosDeClientesLogados (req,res,next){
    res.locals.cliente = req.session.Cliente;
    next();
}
module.exports = exibiDadosDeClientesLogados;