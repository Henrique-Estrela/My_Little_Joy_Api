const User = require('../../controllers/userController'); 

module.exports = (router) => {
    // Rota para registrar um usuário
    router.post('/register-user', async (req, res) => {
        try {
            const { id, name, birthDate, email, password } = req.body; 
            const newUser = new User(id, name, birthDate, email, password); 
            await User.createUser(newUser); 
            res.status(201).send("Usuário registrado com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
