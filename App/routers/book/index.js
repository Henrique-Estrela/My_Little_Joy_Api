const bookController = require('../../controllers/bookController');
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
 * /books/create:
 *   post:
 *     tags:
 *       - Book
 *     description: Este endpoint cria um novo livro no sistema.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: body
 *         name: book
 *         required: true
 *         description: Dados do livro a serem criados
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *               example: "Harry Potter e a Pedra Filosofal"
 *             ano:
 *               type: integer
 *               example: 1997
 *             paginas:
 *               type: integer
 *               example: 223
 *             ranking:
 *               type: integer
 *               example: 5
 *             avaliacao:
 *               type: integer
 *               example: 4
 *             Autor_idAutor:
 *               type: integer
 *               example: 1
 *             Genero_idGenero:
 *               type: integer
 *               example: 2
 *             Editora_idEditora:
 *               type: integer
 *               example: 1
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.post('/create', authMiddleware, uniqueAuthMiddleware, bookController.createBook);

/**
 * @swagger
 * /books/edit/{id}:
 *   put:
 *     tags:
 *       - Book
 *     description: Este endpoint atualiza os dados de um livro específico.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser atualizado
 *         schema:
 *           type: integer
 *       - in: body
 *         name: book
 *         required: true
 *         description: Dados do livro a serem atualizados
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *               example: "Harry Potter e a Câmara Secreta"
 *             ano:
 *               type: integer
 *               example: 1998
 *             paginas:
 *               type: integer
 *               example: 251
 *             ranking:
 *               type: integer
 *               example: 5
 *             avaliacao:
 *               type: integer
 *               example: 5
 *             Autor_idAutor:
 *               type: integer
 *               example: 1
 *             Genero_idGenero:
 *               type: integer
 *               example: 2
 *             Editora_idEditora:
 *               type: integer
 *               example: 1
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.put('/edit/:id', authMiddleware, uniqueAuthMiddleware, bookController.updateBook);

/**
 * @swagger
 * /books/delete/{id}:
 *   delete:
 *     tags:
 *       - Book
 *     description: Este endpoint deleta um livro específico com base no ID fornecido.
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, bookController.deleteBook);

// Precisa de Nivel 2

/**
 * @swagger
 * /books:
 *   get:
 *     tags:
 *       - Book
 *     description: Este endpoint retorna uma lista de todos os livros cadastrados no sistema.
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/', authMiddleware, bookController.getAllBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     tags:
 *       - Book
 *     description: Este endpoint busca um livro específico com base no ID fornecido.
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Livro não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/:id', authMiddleware, bookController.getBookById);

// Precisa de Nivel 1

/**
 * @swagger
 * /books/name/{titulo}:
 *   get:
 *     tags:
 *       - Book
 *     description: Este endpoint busca um livro específico com base no título fornecido.
 *     parameters:
 *       - in: path
 *         name: titulo
 *         required: true
 *         description: Título do livro a ser buscado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Livro não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/name/:titulo', bookController.getBookByTitulo);



// Exporte o roteador
module.exports = (app) => {
    app.use('/books', router); 
};

