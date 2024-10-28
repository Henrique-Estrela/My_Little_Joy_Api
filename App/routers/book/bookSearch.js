const Book = require('../../models/bookModel'); 

module.exports = (router) => {
    // Rota para buscar todos os livros
    router.get('/search-book', async (req, res) => {
        try {
            const books = await Book.getAllBooks(); 
            res.status(200).json(books); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });

};
