const User = require('../../controllers/userController'); // Importa o controlador de usuário
const express = require('express');
const router = express.Router();


router.post('/login', User.login); 


// Exporte o roteador
module.exports = (app) => {
    app.use('/MLJ', router); 
};
