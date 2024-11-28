const authorController = require('../../controllers/authorController');
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
 * /authors/create:
 *   post:
 *     tags:
 *       - Author
 *     description: Este endpoint cria um novo autor.
 *     summary: Cria um novo autor
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: body
 *         name: author
 *         required: true
 *         description: Dados do autor a ser criado
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "J.K. Rowling"
 *             descricao:
 *               type: string
 *               example: "Escritora britânica conhecida pela série Harry Potter."
 *             nacionalidade:
 *               type: string
 *               example: "Britânica"
 *     responses:
 *       201:
 *         description: Autor criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.post('/create', authMiddleware, uniqueAuthMiddleware, authorController.createAuthor);

/**
 * @swagger
 * /authors/edit/{id}:
 *   put:
 *     tags:
 *       - Author
 *     description: Este endpoint atualiza os dados de um autor específico com base no ID fornecido.
 *     summary: Atualiza um autor pelo ID
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor a ser atualizado
 *         schema:
 *           type: integer
 *       - in: body
 *         name: author
 *         required: true
 *         description: Dados do autor a serem atualizados
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "J.K. Rowling"
 *             descricao:
 *               type: string
 *               example: "Atualizada para incluir novos trabalhos."
 *             nacionalidade:
 *               type: string
 *               example: "Britânica"
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *       404:
 *         description: Autor não encontrado
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, authorController.updateAuthor);

/**
 * @swagger
 * /authors/delete/{id}:
 *   delete:
 *     tags:
 *       - Author
 *     description: Este endpoint deleta um autor com base no ID fornecido.
 *     summary: Deleta um autor pelo ID
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor deletado com sucesso
 *       404:
 *         description: Autor não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, authorController.deleteAuthor);

// Precisa de Nivel 2


/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     tags:
 *       - Author
 *     description: Este endpoint retorna um autor específico com base no ID fornecido.
 *     summary:  Busca um autor por ID
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: Autor não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/:id', authMiddleware, authorController.getAuthorById);

/**
 * @swagger
 * /authors:
 *   get:
 *     tags:
 *       - Author
 *     description: Este endpoint retorna uma lista de todos os autores cadastrados no sistema.
 *     summary: Busca todos os autores
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/', authMiddleware, authorController.getAllAuthors);

// Precisa de Nivel 1


/**
 * @swagger
 * /authors/name/{nome}:
 *   get:
 *     tags:
 *       - Author
 *     description: Este endpoint busca um autor específico com base no nome fornecido.
 *     summary: Busca autores pelo Nome
 *     parameters:
 *       - in: path
 *         name: nome
 *         required: true
 *         description: Nome do autor a ser buscado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Autor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: Autor não encontrado
 */
router.get('/name/:nome', authorController.getAuthorByName);


// Exporte o roteador
module.exports = (app) => {
    app.use('/authors', router); 
};

