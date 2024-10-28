const Publisher = require('../../models/publisherModel'); // Importa o modelo de editora

module.exports = (router) => {
        // Rota para deletar uma editora
        router.delete('/delete-publisher/:id', async (req, res) => {
            try {
                const { id } = req.params; // Obtém o ID da editora a ser deletada
                const deletedPublisher = await Publisher.deletePublisher(id); // Deleta a editora
                if (deletedPublisher) {
                    res.status(200).json({ message: "Editora deletada com sucesso!" }); // Retorna mensagem de sucesso
                } else {
                    res.status(404).json({ message: "Editora não encontrada" }); // Retorna erro se não encontrada
                }
            } catch (error) {
                res.status(400).json({ message: error.message }); // Resposta de erro
            }
        });
};
