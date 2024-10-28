const Author = require('../../models/authorModel'); 

module.exports = (router) => {
    // Rota para deletar um autor
    router.delete('/delete-author/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const deletedAuthor = await Author.deleteAuthor(id);
            if (deletedAuthor) {
                res.status(200).json({ message: "Autor deletado com sucesso!" }); 
            } else {
                res.status(404).json({ message: "Autor não encontrado" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
