const Author = require('../../models/authorModel'); 

module.exports = (router) => {
    // Rota para buscar um autor por ID
    router.get('/search-author/:id', async (req, res) => {
        try {
            const author = await Author.getAuthorById(req.params.id); 
            if (author) {
                res.status(200).json(author); 
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
