const Bookcase = require('../../models/bookcaseModel'); // Importa o modelo de estante

module.exports = (router) => {
    // Rota para deletar uma estante
    router.delete('/delete-bookcase/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID da estante a ser deletada
            const deletedBookcase = await Bookcase.deleteBookcase(id); // Deleta a estante
            if (deletedBookcase) {
                res.status(200).json({ message: "Estante deletada com sucesso!" }); // Retorna mensagem de sucesso
            } else {
                res.status(404).json({ message: "Estante não encontrada" }); // Retorna erro se não encontrada
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
