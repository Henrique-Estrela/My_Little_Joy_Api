const Book = require('../../models/bookModel'); // Importa o modelo de livro

module.exports = (router) => {
    router.post('/register-book', async (req, res) => {
        try {
            const { id, title, year, pages, rank, rating, authorId, genreId, publisherId } = req.body; // Obtém os dados do corpo da requisição
            const newBook = new Book(id, title, year, pages, rank, rating, authorId, genreId, publisherId); // Cria uma nova instância do livro
            await Book.createBook(newBook); // Chama o método para criar o livro
            res.status(201).send("Livro registrado com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
