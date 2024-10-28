const Bookcase = require('../../models/bookcaseModel'); 

module.exports = (router) => {
    // Rota para deletar uma estante
    router.delete('/delete-bookcase/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const deletedBookcase = await Bookcase.deleteBookcase(id); 
            if (deletedBookcase) {
                res.status(200).json({ message: "Estante deletada com sucesso!" }); 
            } else {
                res.status(404).json({ message: "Estante não encontrada" }); 
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
