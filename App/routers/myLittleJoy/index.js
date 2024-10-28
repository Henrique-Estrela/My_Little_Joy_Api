const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let myLittleJoySendEmail = require('./SendEmail');
let myLittleJoyUserCheck = require('./userCheck');



// router.get('/filter', myLittleJoyFilter);
// router.get('/register', myLittleJoyRegister);


// Use o roteador de registro de autor
myLittleJoySendEmail(router); // Certifique-se de que isso está correto
myLittleJoyUserCheck(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/MLJ', router); // Define o prefixo da rota
};
