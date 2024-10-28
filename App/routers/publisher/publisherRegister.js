const Publisher = require('../../models/publisherModel');

module.exports = (router) => {
    // Rota para registrar uma editora
    router.post('/register-publisher', async (req, res) => {
        try {
            const { id, name, description } = req.body; 
            const newPublisher = new Publisher(id, name, description); 
            await Publisher.createPublisher(newPublisher); 
            res.status(201).send("Editora registrada com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
