const Publisher = require('../../models/publisherModel'); // Importa o modelo de editora

module.exports = (router) => {
    router.get('/search-publisher', async (req, res) => {
        try {
            const publishers = await Publisher.getAllPublishers(); // Busca todas as editoras
            res.status(200).json(publishers); // Retorna a lista de editoras
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
