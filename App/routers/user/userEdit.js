const User = require('../../models/userModel'); // Importa o modelo de usuário

module.exports = (router) => {
    router.put('/edit-user/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do usuário a ser editado
            const updatedData = req.body; // Obtém os dados atualizados do corpo da requisição
            const updatedUser = await User.updateUser(id, updatedData); // Atualiza o usuário
            if (updatedUser) {
                res.status(200).json(updatedUser); // Retorna o usuário atualizado
            } else {
                res.status(404).json({ message: "Usuário não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
