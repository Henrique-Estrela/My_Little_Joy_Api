const Author = require('../../controllers/authorController'); // Importa o modelo de autor

module.exports = (router) => {
    // Rota para buscar todos os autores
    router.get('/search-author', async (req, res) => {
        try {
            const authors = await Author.getAllAuthors(); 
            res.status(200).json(authors);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
};
