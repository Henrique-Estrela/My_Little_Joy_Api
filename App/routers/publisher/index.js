const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let publisherDelete = require('./publisherDelete');
let publisherEdit = require('./publisherEdit');
let publisherRegister = require('./publisherRegister');
let publisherSearch = require('./publisherSearch');

// router.delete('/delete', publisherDelete);
// router.put('/edit', publisherEdit);
// router.post('/register', publisherRegister);
// router.get('/search', publisherSearch);

// Use o roteador de registro de autor
publisherDelete(router); // Certifique-se de que isso está correto
publisherEdit(router);
publisherRegister(router);
publisherSearch(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/publishers', router); // Define o prefixo da rota
};
