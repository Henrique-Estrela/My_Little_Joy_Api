const UserController = require('../../controllers/userController');
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
 * /users/getAll:
 *   get:
 *     tags:
 *       - User
 *     summary: Busca todos os usuários
 *     description: Este endpoint retorna um array de objetos de usuários, cada um contendo informações básicas como ID, nome, data de nascimento, email e senha (hash).
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/getAll', authMiddleware, uniqueAuthMiddleware, UserController.getAllUsers);


// Precisa de Nivel 2

/**
 * @swagger
 * /users/getId/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Busca um usuário pelo ID
 *     description: Este endpoint busca um usuário específico com base no ID fornecido.
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "Alice"
 *                 dataNascimento:
 *                   type: string
 *                   format: date
 *                   example: "1990-01-01"
 *                 email:
 *                   type: string
 *                   example: "alice@example.com"
 *                 senha:
 *                   type: string
 *                   example: "$2b$10$EIXZ... (hash da senha)"
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Não autorizado, credenciais inválidas
 *       403:
 *         description: Acesso negado, nível de autorização insuficiente
 */
router.get('/getId/:id', authMiddleware, UserController.getUserById);


/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Atualiza um usuário pelo ID
 *     description: Este endpoint atualiza as informações de um usuário existente. Se a senha for fornecida, ela será hasheada antes de ser armazenada.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: integer
 *       - in: body
 *         name: user
 *         required: true
 *         description: Dados do usuário a serem atualizados
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Alice"
 *             dataNascimento:
 *               type: string
 *               format: date
 *               example: "1990-01-01"
 *             email:
 *               type: string
 *               example: "alice@example.com"
 *             senha:
 *               type: string
 *               example: "novaSenha123"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao atualizar usuário
 */
router.put('/update/:id', authMiddleware, uniqueAuthMiddleware, UserController.updateUser);


// Precisa de Nivel 3

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Deleta um usuário pelo ID
 *     description: Este endpoint deleta um usuário específico com base no ID fornecido.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao deletar usuário
 */
router.delete('/delete/:id', authMiddleware, uniqueAuthMiddleware, UserController.deleteUser);


// Precisa de Nivel 1

/**
 * @swagger
 * /users/autenticar:
 *   post:
 *     tags:
 *       - User
 *     summary: Autentica um usuário
 *     description: Este endpoint autentica um usuário com base no email e senha fornecidos.
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         description: Dados do usuário para autenticação
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               example: "alice@example.com"
 *             senha:
 *               type: string
 *               example: "senha123"
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login bem-sucedido!"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR... (token)"
 *       401:
 *         description: Credenciais inválidas
 *       400:
 *         description: Email e senha são obrigatórios
 */
router.post('/autenticar', UserController.login);


/**
 * @swagger
 * /users/create:
 *   post:
 *     tags:
 *       - User
 *     summary: Cria um novo usuário
 *     description: Este endpoint cria um novo usuário com os dados fornecidos.
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         description: Dados do usuário a serem criados
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Alice"
 *             dataNascimento:
 *               type: string
 *               format: date
 *               example: "1990-01-01"
 *             email:
 *               type: string
 *               example: "alice@example.com"
 *             senha:
 *               type: string
 *               example: "senha123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar usuário
 */
router.post('/create', UserController.createUser);

// Exporte o roteador
module.exports = (app) => {
    app.use('/users', router); 
};
