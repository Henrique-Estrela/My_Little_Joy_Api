const Bookcase = require('../../models/bookcaseModel'); // Importa o modelo de estante

module.exports = (router) => {
    // Rota para editar uma estante
    router.put('/edit-bookcase/:id', async (req, res) => {
        try {
            const { id } = req.params; // Obtém o ID da estante a ser editada
            const updatedData = req.body; // Obtém os dados atualizados do corpo da requisição
            const updatedBookcase = await Bookcase.updateBookcase(id, updatedData); // Atualiza a estante
            if (updatedBookcase) {
                res.status(200).json(updatedBookcase); // Retorna a estante atualizada
            } else {
                res.status(404).json({ message: "Estante não encontrada" }); // Retorna erro se não encontrada
            }
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
