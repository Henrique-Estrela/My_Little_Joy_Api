const UserController = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware'); // Importando o middleware
const uniqueAuthMiddleware = require('../../middleware/uniqueAuthMiddleware'); // Middleware para autenticação única

const express = require('express');
const router = express.Router();

// =================================================================
//                RANQUE DOS NÍVEIS              
// =================================================================
//  Nível  | Descrição                    
// -----------------------------------------------------------------
//    1    | Baixo - Qualquer pessoa pode utilizar os comandos.                 
//    2    | Médio - Somente pessoas autorizadas/logadas no site.           
//    3    | Alto - Somente o pessoas que tem poder do ADM                    
// =================================================================


// Precisa de Nivel 3
router.get('/getAll', authMiddleware, uniqueAuthMiddleware, UserController.getAllUsers);

// Precisa de Nivel 2
router.get('/getId/:id', authMiddleware, UserController.getUserById);   // Buscar usuário por ID
router.put('/updade/:id', authMiddleware, uniqueAuthMiddleware, UserController.updateUser);    // Atualizar usuário
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, UserController.deleteUser); // Deletar usuário

// Precisa de Nivel 1
router.post('/autenticar', UserController.login); 
router.post('/create', UserController.createUser);

// Exporte o roteador
module.exports = (app) => {
    app.use('/users', router); 
};



