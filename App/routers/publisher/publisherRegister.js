const Publisher = require('../../models/publisherModel'); // Importa o modelo de editora

module.exports = (router) => {
    router.post('/register-publisher', async (req, res) => {
        try {
            const { id, name, description } = req.body; // Obtém os dados do corpo da requisição
            const newPublisher = new Publisher(id, name, description); // Cria uma nova instância da editora
            await Publisher.createPublisher(newPublisher); // Chama o método para criar a editora
            res.status(201).send("Editora registrada com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
