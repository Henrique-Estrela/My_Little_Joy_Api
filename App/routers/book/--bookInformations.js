const Book = require('../../models/bookModel'); 


module.exports = (router) => {
    router.get('/info-book', async (req, res) => {
        try {
            res.status(200).send("informado");
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
};
