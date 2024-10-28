const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

let myLittleJoySendEmail = require('./SendEmail');
let myLittleJoyUserCheck = require('./userCheck');


// Use o roteador de registro de autor
myLittleJoySendEmail(router); 
myLittleJoyUserCheck(router);

// Exporte o roteador
module.exports = (app) => {
    app.use('/MLJ', router); 
};
