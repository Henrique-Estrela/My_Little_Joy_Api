const Publisher = require('../../models/publisherModel'); // Importa o modelo de editora

module.exports = (router) => {
    // Rota para procurar editoras
    router.get('/search-publisher', async (req, res) => {
        try {
            const publishers = await Publisher.getAllPublishers(); 
            res.status(200).json(publishers); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
