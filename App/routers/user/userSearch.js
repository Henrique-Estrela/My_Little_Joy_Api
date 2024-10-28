const User = require('../../models/userModel'); 

module.exports = (router) => {
    // Rota para procurar usuários
    router.get('/search-user', async (req, res) => {
        try {
            const users = await User.getAllUsers(); 
            res.status(200).json(users); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
