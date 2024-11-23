const Book = require('../../controllers/bookController'); 
module.exports = (router) => {
    // Rota para buscar um livro por ID
    router.get('/search-book/:id', async (req, res) => {
        try {
            const book = await Book.getBookById(req.params.id); 
            if (book) {
                res.status(200).json(book); 
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
