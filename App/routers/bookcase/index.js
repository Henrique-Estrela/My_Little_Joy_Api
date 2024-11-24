const Bookcase = require('../../controllers/bookcaseController'); // Importando o controlador
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
router.get('/getAll', authMiddleware, uniqueAuthMiddleware, Bookcase.getAllBookcases);

router.get('/:id', authMiddleware, Bookcase.getBookcaseById);

// Precisa de Nivel 2
router.post('/create', authMiddleware, Bookcase.createBookcase);
router.put('/edit/:id', authMiddleware, Bookcase.updateBookcase);
router.delete('/delete/:id', authMiddleware, Bookcase.deleteBookcase);
router.get('/count/:idUser', authMiddleware, Bookcase.getBookcaseCount);
router.get('/filter/:idUser', authMiddleware, Bookcase.filterBookcases);
router.get('/user/:usuario/book/:livroID', authMiddleware, Bookcase.getBookcaseByUserAndBook);


// Precisa de Nivel 1



// Exporte o roteador
module.exports = (app) => {
    app.use('/bookcases', router); 
};
