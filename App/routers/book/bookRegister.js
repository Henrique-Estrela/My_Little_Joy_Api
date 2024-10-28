const Book = require('../../models/bookModel'); 

module.exports = (router) => {
    router.post('/register-book', async (req, res) => {
        try {
            const { id, title, year, pages, rank, rating, authorId, genreId, publisherId } = req.body; 
            const newBook = new Book(id, title, year, pages, rank, rating, authorId, genreId, publisherId); 
            await Book.createBook(newBook); 
            res.status(201).send("Livro registrado com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
