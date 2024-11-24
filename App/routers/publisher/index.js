const PublisherController = require('../../controllers/publisherController');
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
router.post('/create', authMiddleware, uniqueAuthMiddleware, PublisherController.createPublisher); // Criar editora
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, PublisherController.updatePublisher); // Atualizar editora
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, PublisherController.deletePublisher); // Deletar editora

// Precisa de Nivel 2
router.get('/', authMiddleware, PublisherController.getAllPublishers); // Buscar todas as editoras
router.get('/:id', authMiddleware, PublisherController.getPublisherById); // Buscar editora por ID

// Precisa de Nivel 1





// Exporte o roteador
module.exports = (app) => {
    app.use('/publishers', router); 
};
