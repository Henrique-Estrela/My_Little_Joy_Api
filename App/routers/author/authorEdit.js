const Author = require('../../models/authorModel'); // Importa o modelo de autor

module.exports = (router) => {
    // Rota para editar um autor
    router.put('/edit-author/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID do autor a ser editado
            const updatedData = req.body; // Obtém os dados atualizados do corpo da requisição
            const updatedAuthor = await Author.updateAuthor(id, updatedData); // Atualiza o autor
            if (updatedAuthor) {
                res.status(200).json(updatedAuthor); // Retorna o autor atualizado
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
