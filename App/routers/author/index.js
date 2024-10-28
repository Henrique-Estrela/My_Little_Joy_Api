const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let authorDelete = require('./authorDelete');
let authorEdit = require('./authorEdit');
let authorRegister = require('./authorRegister');
let authorSearch = require('./authorSearch');
let authorSearchId = require('./authorSearchId');

// router.delete('/delete', authorDelete);
// router.put('/edit', authorEdit);
// router.post('/register', authorRegister);
// router.get('/search', authorSearch);
// router.get('/search/:id', authorSearchId);

// Use o roteador de registro de autor
authorDelete(router); // Certifique-se de que isso está correto
authorEdit(router);
authorRegister(router);
authorSearch(router);
authorSearchId(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/authors', router); // Define o prefixo da rota
};
