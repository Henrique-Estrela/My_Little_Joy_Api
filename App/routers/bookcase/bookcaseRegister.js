const Bookcase = require('../../models/bookcaseModel'); // Importa o modelo de estante
const Book = require('../../models/bookModel'); // Importa o modelo de livro
const User = require('../../models/userModel'); // Importa o modelo de usuário

module.exports = (router) => {
    router.post('/register-bookcase', async (req, res) => {
        try {
            const { id, bookId, userId } = req.body; // Obtém os dados do corpo da requisição

            // Verifica se o livro e o usuário existem
            const bookExists = await Book.getBookById(bookId);
            const userExists = await User.getUserById(userId);

            if (!bookExists || !userExists) {
                return res.status(400).json({ message: "Livro ou usuário não encontrados." });
            }

            const newBookcase = new Bookcase(id, bookId, userId); // Cria uma nova instância da estante
            await Bookcase.createBookcase(newBookcase); // Chama o método para criar a estante
            res.status(201).send("Estante registrada com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });

};
