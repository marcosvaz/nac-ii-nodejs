module.exports.cardapio = function(app, req, res){
    var connection = app.config.dbConnection();
    var PratosDAO = new app.app.models.PratosDAO(connection);
    PratosDAO.getPratos(function(error, result){
        res.render('cardapio', {pratos : result});    
    });
}

module.exports.cadastrar = function(app, req, res){
    res.render('cadastrar', {validacao: {}});
}

module.exports.cadastrar_novo = function(app, req, res){
    var prato = req.body;
    req.assert('nm_categoria', 'Categoria não pode estar vazia!').notEmpty();
    req.assert('nm_categoria', 'Categoria precisa ter entre 5 e 45 caracteres!').len(5, 45);
    req.assert('nm_prato', 'Nome não pode estar vazio!').notEmpty();
    req.assert('nm_prato', 'Nome precisa ter entre 5 e 45 caracteres!').len(5, 45);
    req.assert('descricao', 'Descrição não pode estar vazia!').notEmpty();
    req.assert('descricao', 'Descrição precisa ter entre 5 e 45 caracteres!').len(5, 45);
    req.assert('preco', 'Preço não pode estar vazio!').notEmpty();
    req.assert('preco', 'Preço precisa ter entre 1 e 45 caracteres!').len(1, 45);

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastrar', {validacao : erros});
        return;
    }

    var connection = app.config.dbConnection();
    var PratosDAO = new app.app.models.PratosDAO(connection);
    PratosDAO.cadastrarPrato(prato, function(error, result){
        console.log(prato);
        res.redirect('cardapio');
    });
}