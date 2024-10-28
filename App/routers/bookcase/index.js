const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let bookcaseDelete = require('./bookcaseDelete');
let bookcaseEdit = require('./bookcaseEdit');
let bookcaseFilter = require('./bookcaseFilter');
let bookcaseRegister = require('./bookcaseRegister');
let bookcaseLength = require('./bookcaseLength');

// router.delete('/delete', bookcaseDelete);
// router.put('/edit', bookcaseEdit);
// router.get('/filter', bookcaseFilter);
// router.post('/register', bookcaseRegister);
// router.get('/length', bookcaseLength);

// Use o roteador de registro de autor
bookcaseDelete(router); // Certifique-se de que isso está correto
bookcaseEdit(router);
bookcaseFilter(router);
bookcaseRegister(router);
bookcaseLength(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/bookcases', router); // Define o prefixo da rota
};
