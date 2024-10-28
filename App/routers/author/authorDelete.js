const Author = require('../../models/authorModel'); // Importa o modelo de autor

module.exports = (router) => {
    // Rota para deletar um autor
    router.delete('/delete-author/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do autor a ser deletado
            const deletedAuthor = await Author.deleteAuthor(id); // Deleta o autor
            if (deletedAuthor) {
                res.status(200).json({ message: "Autor deletado com sucesso!" }); // Retorna mensagem de sucesso
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
