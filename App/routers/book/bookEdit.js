const Book = require('../../controllers/bookController'); 

module.exports = (router) => {
    // Rota para editar um livro
    router.put('/edit-book/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const updatedData = req.body; 
            const updatedBook = await Book.updateBook(id, updatedData); 
            if (updatedBook) {
                res.status(200).json(updatedBook); 
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
