const PublisherController = require('../../controllers/publisherController');
const authMiddleware = require('../../Middleware/authMiddleware'); // Importando o middleware
const uniqueAuthMiddleware = require('../../Middleware/uniqueAuthMiddleware'); // Middleware para autenticação única

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

/**
 * @swagger
 * /publishers/create:
 *   post:
 *     tags:
 *       - Publisher
 *     description: Este endpoint cria uma nova editora.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: body
 *         name: publisher
 *         required: true
 *         description: Dados da editora a ser criada
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Editora Globo"
 *             descricao:
 *               type: string
 *               example: "Editora brasileira especializada em livros e revistas."
 *     responses:
 *       201:
 *         description: Editora criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.post('/create', authMiddleware, uniqueAuthMiddleware, PublisherController.createPublisher);

/**
 * @swagger
 * /publishers/edit/{id}:
 *   put:
 *     tags:
 *       - Publisher
 *     description: Este endpoint atualiza os dados de uma editora específica com base no ID fornecido.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora a ser atualizada
 *         schema:
 *           type: integer
 *       - in: body
 *         name: publisher
 *         required: true
 *         description: Dados da editora a serem atualizados
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Editora Atualizada"
 *             descricao:
 *               type: string
 *               example: "Descrição atualizada da editora."
 *     responses:
 *       200:
 *         description: Editora atualizada com sucesso
 *       404:
 *         description: Editora não encontrada
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, PublisherController.updatePublisher);

/**
 * @swagger
 * /publishers/delete/{id}:
 *   delete:
 *     tags:
 *       - Publisher
 *     description: Este endpoint deleta uma editora com base no ID fornecido.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora a ser deletada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora deletada com sucesso
 *       404:
 *         description: Editora não encontrada
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, PublisherController.deletePublisher);

// Precisa de Nivel 2

/**
 * @swagger
 * /publishers:
 *   get:
 *     tags:
 *       - Publisher
 *     description: Este endpoint retorna uma lista de todas as editoras cadastradas no sistema.
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Lista de editoras retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Publisher'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/', authMiddleware, PublisherController.getAllPublishers);

/**
 * @swagger
 * /publishers/{id}:
 *   get:
 *     tags:
 *       - Publisher
 *     description: Este endpoint retorna uma editora específica com base no ID fornecido.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da editora a ser buscada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publisher'
 *       404:
 *         description: Editora não encontrada
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/:id', authMiddleware, PublisherController.getPublisherById);



// Exporte o roteador
module.exports = (app) => {
    app.use('/publishers', router); 
};
