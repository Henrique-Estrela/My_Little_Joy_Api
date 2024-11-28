const Bookcase = require('../../controllers/bookcaseController'); // Importando o controlador
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
 * /bookcases/getAll:
 *   get:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint retorna uma lista de todas as estantes de livros no sistema.
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: Lista de estantes de livros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bookcase'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/getAll', authMiddleware, uniqueAuthMiddleware, Bookcase.getAllBookcases);

// Precisa de Nivel 2


/**
 * @swagger
 * /bookcases/{id}:
 *   get:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint retorna uma estante de livro específica com base no ID fornecido.
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da estante de livro a ser buscada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estante de livro encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookcase'
 *       404:
 *         description: Estante de livro não encontrada
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/:id', authMiddleware, Bookcase.getBookcaseById);

/**
 * @swagger
 * /bookcases/create:
 *   post:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint cria uma nova estante de livro.
 *     security:
 *       - bearerAuth: 
 *     parameters:
 *       - in: body
 *         name: bookcase
 *         required: true
 *         description: Dados da estante de livro a ser criada
 *         schema:
 *           type: object
 *           properties:
 *             idBook:
 *               type: integer
 *               example: 1
 *             idUser:
 *               type: integer
 *               example: 1
 *     responses:
 *       201:
 *         description: Estante de livro criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.post('/create', authMiddleware, Bookcase.createBookcase);

/**
 * @swagger
 * /bookcases/edit/{id}:
 *   put:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint atualiza uma estante de livro específica com base no ID fornecido.
 *     security:
 *       - bearerAuth: 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da estante de livro a ser atualizada
 *         schema:
 *           type: integer
 *       - in: body
 *         name: bookcase
 *         required: true
 *         description: Dados da estante de livro a serem atualizados
 *         schema:
 *           type: object
 *           properties:
 *             idBook:
 *               type: integer
 *               example: 1
 *             idUser:
 *               type: integer
 *               example: 1
 *     responses:
 *       200:
 *         description: Estante de livro atualizada com sucesso
 *       404:
 *         description: Estante de livro não encontrada
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.put('/edit/:id', authMiddleware, Bookcase.updateBookcase);

/**
 * @swagger
 * /bookcases/delete/{id}:
 *   delete:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint deleta uma estante de livro com base no ID fornecido.
 *     security:
 *       - bearerAuth:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da estante de livro a ser deletada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estante de livro deletada com sucesso
 *       404:
 *         description: Estante de livro não encontrada
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.delete('/delete/:id', authMiddleware, Bookcase.deleteBookcase);

/**
 * @swagger
 * /bookcases/count/{idUser}:
 *   get:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint retorna o número total de estantes de livros de um usuário.
 *     security:
 *       - bearerAuth: 
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         description: ID do usuário para contar suas estantes de livros
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Número de estantes de livros retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/count/:idUser', authMiddleware, Bookcase.getBookcaseCount);

/**
 * @swagger
 * /bookcases/filter/{idUser}:
 *   get:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint filtra as estantes de livros de um usuário específico com base em critérios adicionais.
 *     security:
 *       - bearerAuth: 
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         description: ID do usuário para filtrar as estantes de livros
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estantes de livros filtradas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bookcase'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/filter/:idUser', authMiddleware, Bookcase.filterBookcases);

/**
 * @swagger
 * /bookcases/user/{usuario}/book/{livroID}:
 *   get:
 *     tags:
 *       - Bookcase
 *     description: Este endpoint retorna uma estante de livro específica de um usuário com base no livro e no usuário fornecido.
 *     security:
 *       - bearerAuth: 
 *     parameters:
 *       - in: path
 *         name: usuario
 *         required: true
 *         description: Nome ou ID do usuário
 *         schema:
 *           type: string
 *       - in: path
 *         name: livroID
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estante de livro encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookcase'
 *       404:
 *         description: Estante de livro não encontrada
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/user/:usuario/book/:livroID', authMiddleware, Bookcase.getBookcaseByUserAndBook);


// Exporte o roteador
module.exports = (app) => {
    app.use('/bookcases', router); 
};
