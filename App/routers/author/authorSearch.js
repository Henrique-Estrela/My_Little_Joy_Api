const Author = require('../../models/authorModel'); // Importa o modelo de autor

module.exports = (router) => {
    // Rota para buscar todos os autores
    router.get('/search-author', async (req, res) => {
        try {
            const authors = await Author.getAllAuthors(); // Busca todos os autores
            res.status(200).json(authors); // Retorna a lista de autores
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
