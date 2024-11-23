const Publisher = require('../../controllers/publisherController'); 

module.exports = (router) => {
        // Rota para deletar uma editora
        router.delete('/delete-publisher/:id', async (req, res) => {
            try {
                const { id } = req.params; 
                const deletedPublisher = await Publisher.deletePublisher(id); 
                if (deletedPublisher) {
                    res.status(200).json({ message: "Editora deletada com sucesso!" }); 
                } else {
                    res.status(404).json({ message: "Editora não encontrada" }); 
                }
            } catch (error) {
                res.status(400).json({ message: error.message }); 
            }
        });
};
