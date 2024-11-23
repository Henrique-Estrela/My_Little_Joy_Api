const Bookcase = require('../../controllers/bookcaseController'); 
const Book = require('../../controllers/bookController');
const User = require('../../controllers/userController'); 

module.exports = (router) => {
    router.post('/register-bookcase', async (req, res) => {
        try {
            const { id, bookId, userId } = req.body; 

            // Verifica se o livro e o usuário existem
            const bookExists = await Book.getBookById(bookId);
            const userExists = await User.getUserById(userId);

            if (!bookExists || !userExists) {
                return res.status(400).json({ message: "Livro ou usuário não encontrados." });
            }

            const newBookcase = new Bookcase(id, bookId, userId); 
            await Bookcase.createBookcase(newBookcase); 
            res.status(201).send("Estante registrada com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });

};
