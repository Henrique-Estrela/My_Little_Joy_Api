const Author = require('../../models/authorModel'); 

module.exports = (router) => {
    // Rota para Resgistrar um autor
    router.post('/register-author', async (req, res) => { 
        try {
            const { id, name, description, nationality } = req.body; 
            const newAuthor = new Author(id, name, description, nationality); 
            await Author.createAuthor(newAuthor); 
            res.status(201).send("Autor registrado com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
