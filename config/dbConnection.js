var mysql = require('mysql');

var conn = function(){
    console.log('Conexão com o banco estabelecida!');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'labfiap$2018',
        database : 'nac'
    });
}

module.exports = function(){
    console.log('Banco carregado!');
    return conn;
}