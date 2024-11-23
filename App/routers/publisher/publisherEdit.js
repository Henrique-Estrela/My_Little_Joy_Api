const Publisher = require('../../controllers/publisherController'); 

module.exports = (router) => {
    // Rota para editar uma editora
    router.put('/edit-publisher/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const updatedData = req.body; 
        const updatedPublisher = await Publisher.updatePublisher(id, updatedData); 
        if (updatedPublisher) {
            res.status(200).json(updatedPublisher); 
        } else {
            res.status(404).json({ message: "Editora não encontrada" }); 
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
    });
};
