const User = require('../../models/userModel'); // Importa o modelo de usuário

module.exports = (router) => {
    // Rota para deletar um usuário
    router.delete('/delete-user/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do usuário a ser deletado
            const deletedUser = await User.deleteUser(id); // Deleta o usuário
            if (deletedUser) {
                res.status(200).json({ message: "Usuário deletado com sucesso!" }); // Retorna mensagem de sucesso
            } else {
                res.status(404).json({ message: "Usuário não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
