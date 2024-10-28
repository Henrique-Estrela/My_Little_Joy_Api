const Author = require('../../models/authorModel'); // Importa o modelo de autor

module.exports = (router) => {
    // Rota para buscar um autor por ID
    router.get('/search-author/:id', async (req, res) => {
        try {
            const author = await Author.getAuthorById(req.params.id); // Busca o autor pelo ID
            if (author) {
                res.status(200).json(author); // Retorna o autor encontrado
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); // Retorna erro se não encontrado
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
