const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let bookcaseDelete = require('./bookcaseDelete');
let bookcaseEdit = require('./bookcaseEdit');
let bookcaseFilter = require('./bookcaseFilter');
let bookcaseRegister = require('./bookcaseRegister');
let bookcaseLength = require('./bookcaselength');



// Use o roteador de registro de autor
bookcaseDelete(router); 
bookcaseEdit(router);
bookcaseFilter(router);
bookcaseRegister(router);
bookcaseLength(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/bookcases', router); 
};
