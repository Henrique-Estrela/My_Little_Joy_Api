const Bookcase = require('../../controllers/bookcaseController'); 

module.exports = (router) => {
    // Rota para editar uma estante
    router.put('/edit-bookcase/:id', async (req, res) => {
        try {
            const { id } = req.params; 
            const updatedData = req.body; 
            const updatedBookcase = await Bookcase.updateBookcase(id, updatedData); 
            if (updatedBookcase) {
                res.status(200).json(updatedBookcase); 
            } else {
                res.status(404).json({ message: "Estante não encontrada" });
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
