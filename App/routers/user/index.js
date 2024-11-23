const express = require('express');
const router = express.Router();

// Importa o arquivo de registro de autor

// let userDelete = require('./userDelete');
// let userEdit = require('./userEdit');
// let userRegister = require('./userRegister');
// let userSearch = require('./userSearch');

// // Use o roteador de registro de autor
// userDelete(router); 
// userEdit(router);
// userRegister(router);
// userSearch(router);

const UserController = require('../../controllers/userController');



router.post('/', UserController.createUser);      // Criar usuário
router.get('/', UserController.getAllUsers);      // Buscar todos os usuários
router.get('/:id', UserController.getUserById);   // Buscar usuário por ID
router.put('/:id', UserController.updateUser);    // Atualizar usuário
router.delete('/:id', UserController.deleteUser); // Deletar usuário


// Exporte o roteador
module.exports = (app) => {
    app.use('/users', router); 
};
