const User = require('../../models/userModel'); // Importa o modelo de usuário

module.exports = (router) => {
    router.get('/search-user', async (req, res) => {
        try {
            const users = await User.getAllUsers(); // Busca todos os usuários
            res.status(200).json(users); // Retorna a lista de usuários
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
