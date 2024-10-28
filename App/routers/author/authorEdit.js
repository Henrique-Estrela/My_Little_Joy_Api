const Author = require('../../models/authorModel'); 

module.exports = (router) => {
    // Rota para editar um autor
    router.put('/edit-author/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const updatedData = req.body; 
            const updatedAuthor = await Author.updateAuthor(id, updatedData); 
            if (updatedAuthor) {
                res.status(200).json(updatedAuthor);
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
