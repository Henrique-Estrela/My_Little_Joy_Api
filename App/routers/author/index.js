const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let authorDelete = require('./authorDelete');
let authorEdit = require('./authorEdit');
let authorRegister = require('./authorRegister');
let authorSearch = require('./authorSearch');
let authorSearchId = require('./authorSearchId');


// Use o roteador de registro de autor
authorDelete(router); 
authorEdit(router);
authorRegister(router);
authorSearch(router);
authorSearchId(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/authors', router); 
};
