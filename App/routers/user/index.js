const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let userDelete = require('./userDelete');
let userEdit = require('./userEdit');
let userRegister = require('./userRegister');
let userSearch = require('./userSearch');

// Use o roteador de registro de autor
userDelete(router); 
userEdit(router);
userRegister(router);
userSearch(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/users', router); 
};
