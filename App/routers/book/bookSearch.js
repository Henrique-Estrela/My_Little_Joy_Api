const Book = require('../../models/bookModel'); // Importa o modelo de livro

module.exports = (router) => {
    // Rota para buscar todos os livros
    router.get('/search-book', async (req, res) => {
        try {
            const books = await Book.getAllBooks(); // Busca todos os livros
            res.status(200).json(books); // Retorna a lista de livros
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });

};
