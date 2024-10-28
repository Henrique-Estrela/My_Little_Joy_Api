const Book = require('../../models/bookModel'); // Importa o modelo de livro

module.exports = (router) => {
    // Rota para deletar um livro
    router.delete('/delete-book/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do livro a ser deletado
            const deletedBook = await Book.deleteBook(id); // Deleta o livro
            if (deletedBook) {
                res.status(200).json({ message: "Livro deletado com sucesso!" }); // Retorna mensagem de sucesso
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
