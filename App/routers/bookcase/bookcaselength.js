const Bookcase = require('../../models/bookcaseModel'); // Importa o modelo de estante

module.exports = (router) => {
    // Rota para obter o número total de estantes
    router.get('/length-bookcase', async (req, res) => {
        try {
            const allBookcases = await Bookcase.getAllBookcases(); // Busca todas as estantes
            const length = allBookcases.length; // Obtém o número total de estantes
            res.status(200).json({ length }); // Retorna o comprimento
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
