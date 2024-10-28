const Publisher = require('../../models/publisherModel'); // Importa o modelo de editora

module.exports = (router) => {
    // Rota para editar uma editora
    router.put('/edit-publisher/:id', async (req, res) => {
    try {
        const { id } = req.params; // Obtém o ID da editora a ser editada
        const updatedData = req.body; // Obtém os dados atualizados do corpo da requisição
        const updatedPublisher = await Publisher.updatePublisher(id, updatedData); // Atualiza a editora
        if (updatedPublisher) {
            res.status(200).json(updatedPublisher); // Retorna a editora atualizada
        } else {
            res.status(404).json({ message: "Editora não encontrada" }); // Retorna erro se não encontrada
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); // Resposta de erro
    }
    });
};
