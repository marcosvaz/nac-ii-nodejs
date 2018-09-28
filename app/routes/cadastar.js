module.exports = function(app){
    app.get('/cadastrar', function(req, res){
        app.app.controllers.cardapio.cadastrar(app, req, res);
    });
    app.post('/cadastrar', function(req, res){
        app.app.controllers.cardapio.cadastrar_novo(app, req, res);
    });
}