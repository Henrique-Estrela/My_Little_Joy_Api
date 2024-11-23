const Bookcase = require('../../controllers/bookcaseController'); 

module.exports = (router) => {
    // Rota para filtrar estantes
    router.get('/filter-bookcase', async (req, res) => {
        try {
            const { userId } = req.query; 
            const allBookcases = await Bookcase.getAllBookcases(); 
            const filteredBookcases = allBookcases.filter(bookcase => bookcase.userId === userId); 
            res.status(200).json(filteredBookcases); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
