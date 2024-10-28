const Book = require('../../models/bookModel'); // Importa o modelo de livro

module.exports = (router) => {
    // Rota para buscar um livro por ID
    router.get('/search-book/:id', async (req, res) => {
        try {
            const book = await Book.getBookById(req.params.id); // Busca o livro pelo ID
            if (book) {
                res.status(200).json(book); // Retorna o livro encontrado
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
