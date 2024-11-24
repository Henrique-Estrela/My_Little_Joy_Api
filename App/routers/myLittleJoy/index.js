const User = require('../../controllers/userController'); // Importa o controlador de usuário
const express = require('express');
const router = express.Router();


const suport = require('./suporte');
suport(router)



// Exporte o roteador
module.exports = (app) => {
    app.use('/MLJ', router); 
};
