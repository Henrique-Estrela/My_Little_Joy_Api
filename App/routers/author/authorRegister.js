const Author = require('../../models/authorModel'); // Importa o modelo de autor

module.exports = (router) => {
    router.post('/register-author', async (req, res) => { // Mudei de GET para POST
        try {
            const { id, name, description, nationality } = req.body; // Obtém os dados do corpo da requisição
            const newAuthor = new Author(id, name, description, nationality); // Cria uma nova instância do autor
            await Author.createAuthor(newAuthor); // Chama o método para criar o autor
            res.status(201).send("Autor registrado com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
