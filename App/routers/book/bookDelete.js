const Book = require('../../models/bookModel');

module.exports = (router) => {
    // Rota para deletar um livro
    router.delete('/delete-book/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const deletedBook = await Book.deleteBook(id); 
            if (deletedBook) {
                res.status(200).json({ message: "Livro deletado com sucesso!" }); 
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
