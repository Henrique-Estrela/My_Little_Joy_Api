const User = require('../../models/userModel'); 

module.exports = (router) => {
    // Rota para editar um usuário
    router.put('/edit-user/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const updatedData = req.body; 
            const updatedUser = await User.updateUser(id, updatedData); 
            if (updatedUser) {
                res.status(200).json(updatedUser); 
            } else {
                res.status(404).json({ message: "Usuário não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
