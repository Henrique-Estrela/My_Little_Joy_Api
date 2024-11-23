const User = require('../../controllers/userController'); // Importa o modelo de usuário

module.exports = (router) => {
    // Rota para verificar se o usuário é ele mesmo
    router.post('/sendEmail-mlj', async (req, res) => {
        try {
            const { id, password } = req.body; // Obtém os dados do corpo da requisição
            const user = await User.getUserById(id); // Busca o usuário pelo ID

            if (user && user.password === password) {
                // Se a verificação for bem-sucedida
                res.status(200).json({
                    message: "Usuário verificado com sucesso!",
                    canAccessFeature: true, // Indica que o usuário pode acessar uma funcionalidade
                    userId: user.id // Retorna o ID do usuário
                });
            } else {
                res.status(401).json({ message: "Verificação falhou. ID ou senha incorretos." }); // Retorna erro de verificação
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
}; 