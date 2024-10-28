const Bookcase = require('../../models/bookcaseModel'); // Importa o modelo de estante

module.exports = (router) => {
    // Rota para filtrar estantes
    router.get('/filter-bookcase', async (req, res) => {
        try {
            const { userId } = req.query; // Obtém o ID do usuário a partir da query string
            const allBookcases = await Bookcase.getAllBookcases(); // Busca todas as estantes
            const filteredBookcases = allBookcases.filter(bookcase => bookcase.userId === userId); // Filtra as estantes
            res.status(200).json(filteredBookcases); // Retorna as estantes filtradas
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};
