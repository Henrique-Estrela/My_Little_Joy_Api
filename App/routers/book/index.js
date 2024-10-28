const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let bookDelete = require('./bookDelete');
let bookEdit = require('./bookEdit');
let bookInformation = require('./bookInformations');
let bookRegister = require('./bookRegister');
let bookSearch = require('./bookSearch');
let bookSearchId = require('./bookSearchId');

// router.delete('/delete', bookDelete);
// router.put('/edit', bookEdit);
// router.get('/info', bookInfo);
// router.post('/register', bookRegister);
// router.get('/search', bookSearch);
// router.get('/search/:id', bookSearchId);

// Use o roteador de registro de autor
bookDelete(router); // Certifique-se de que isso está correto
bookEdit(router);
bookInformation(router);
bookRegister(router);
bookSearch(router);
bookSearchId(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/books', router); // Define o prefixo da rota
};
