const authorController = require('../../controllers/authorController');
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
router.post('/create', authMiddleware, uniqueAuthMiddleware, authorController.createAuthor);          // Criar autores
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, authorController.updateAuthor);        // Atualizar autores
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, authorController.deleteAuthor);     // Deletar autores


// Precisa de Nivel 2
router.get('/:id', authMiddleware, authorController.getAuthorById);       // Buscar autores por ID
router.get('/', authMiddleware, authorController.getAllAuthors);          // Buscar todos os autores


// Precisa de Nivel 1
router.get('/name/:nome', authorController.getAuthorByName);   // Buscar autores por NOME



// Exporte o roteador
module.exports = (app) => {
    app.use('/authors', router); 
};

