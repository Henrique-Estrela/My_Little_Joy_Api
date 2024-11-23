const User = require('../../controllers/userController'); 






module.exports = (router) => {
    // Rota para deletar um usuário
    router.delete('/delete-user/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const deletedUser = await User.deleteUser(id); 
            if (deletedUser) {
                res.status(200).json({ message: "Usuário deletado com sucesso!" }); 
            } else {
                res.status(404).json({ message: "Usuário não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
