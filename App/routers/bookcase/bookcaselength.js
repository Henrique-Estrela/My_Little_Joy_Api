const Bookcase = require('../../models/bookcaseModel'); 

module.exports = (router) => {
    // Rota para obter o número total de estantes
    router.get('/length-bookcase', async (req, res) => {
        try {
            const allBookcases = await Bookcase.getAllBookcases(); 
            const length = allBookcases.length; 
            res.status(200).json({ length });
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
