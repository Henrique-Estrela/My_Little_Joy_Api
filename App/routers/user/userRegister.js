const User = require('../../models/userModel'); // Importa o modelo de usuário

module.exports = (router) => {
    router.post('/register-user', async (req, res) => {
        try {
            const { id, name, birthDate, email, password } = req.body; // Obtém os dados do corpo da requisição
            const newUser = new User(id, name, birthDate, email, password); // Cria uma nova instância do usuário
            await User.createUser(newUser); // Chama o método para criar o usuário
            res.status(201).send("Usuário registrado com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
