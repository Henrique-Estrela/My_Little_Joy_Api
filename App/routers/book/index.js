const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let bookDelete = require('./bookDelete');
let bookEdit = require('./bookEdit');
let bookInformation = require('./bookInformations');
let bookRegister = require('./bookRegister');
let bookSearch = require('./bookSearch');
let bookSearchId = require('./bookSearchId');

// Use o roteador de registro de autor
bookDelete(router); 
bookEdit(router);
bookInformation(router);
bookRegister(router);
bookSearch(router);
bookSearchId(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/books', router); 
};
