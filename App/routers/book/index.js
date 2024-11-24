const bookController = require('../../controllers/bookController');
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
router.post('/create', authMiddleware, uniqueAuthMiddleware, bookController.createBook);          // Criar autores
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, bookController.updateBook);        // Atualizar autores
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, bookController.deleteBook);     // Deletar autores

// Precisa de Nivel 2
router.get('/', authMiddleware, bookController.getAllBooks);          // Buscar todos os autores
router.get('/:id', authMiddleware, bookController.getBookById);       // Buscar autores por ID

// Precisa de Nivel 1
router.get('/name/:titulo', bookController.getBookByTitulo);   // Buscar autores por NOME




// Exporte o roteador
module.exports = (app) => {
    app.use('/books', router); 
};

