const Book = require('../../models/bookModel'); // Importa o modelo de livro

module.exports = (router) => {
    // Rota para editar um livro
    router.put('/edit-book/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do livro a ser editado
            const updatedData = req.body; // Obtém os dados atualizados do corpo da requisição
            const updatedBook = await Book.updateBook(id, updatedData); // Atualiza o livro
            if (updatedBook) {
                res.status(200).json(updatedBook); // Retorna o livro atualizado
            } else {
                res.status(404).json({ message: "Livro não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
