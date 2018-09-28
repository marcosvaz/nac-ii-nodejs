function PratosDAO(connection){
    this._connection = connection;
}

PratosDAO.prototype.getPratos = function(callback){
    this._connection.query('SELECT * FROM cardapio', callback);
}

PratosDAO.prototype.cadastrarPrato = function(prato, callback){
    this._connection.query('INSERT INTO cardapio SET ?', prato, callback);
}

module.exports = function(){
    return PratosDAO;
}