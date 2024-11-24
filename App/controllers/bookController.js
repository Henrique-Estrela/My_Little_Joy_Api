const Book = require('../models/bookModel'); // Importando o modelo
const BookView = require('../models/bookVModel'); // Importando o modelo

const { Op } = require('sequelize');

class BookModel {
  

    // Método para simular a criação de um livro
    static async createBook(req, res) {
        try {
            const { titulo, ano, paginas, ranking, avaliacao, Autor_idAutor, Genero_idGenero, Editora_idEditora } = req.body;

            // Validação simples
            if (!titulo || !ano || !paginas || !ranking || !avaliacao || !Autor_idAutor || !Genero_idGenero || !Editora_idEditora) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
            }

            // Verificar se o autor, gênero e editora existem
            const autorExists = await Book.findByPk(Autor_idAutor);
            const generoExists = await Book.findByPk(Genero_idGenero);
            const editoraExists = await Book.findByPk(Editora_idEditora);

            if (!autorExists || !generoExists || !editoraExists) {
                return res.status(400).json({ message: 'Autor, gênero ou editora não existem.' });
            }

            // Criar autor no banco
            const newBook = await Book.create({ titulo, ano, paginas, ranking, avaliacao, Autor_idAutor, Genero_idGenero, Editora_idEditora });
            return res.status(201).json(newBook);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar livro.', error: error.message });
        }
    }

    // Método para buscar um livro por ID
    static async getAllBooks(req, res) {
        try {
            const book = await BookView.findAll();
            return res.status(200).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar livros.', error: error.message });
        }
    }

    // Método para atualizar um livro
    static async getBookById(req, res) {
        try {
            const { id } = req.params;

            const book = await BookView.findByPk(id);
            if (!book) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            return res.status(200).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuário.', error: error.message });
        }
    }
    static async getBookByTitulo(req, res) {
        try {
            const { titulo } = req.params;

            // Validação de titulo não vazio e sem espaços extras
            if (!titulo || titulo.trim() === '') {
                return res.status(400).json({ message: 'O titulo do livro é obrigatório.' });
            }

            // Limpeza do titulo, removendo espaços extras
            const cleantitulo = titulo.trim();

            // Buscar o autor no banco de dados pela coluna 'titulo' na tabela 'livro' usando LIKE
            const book = await BookView.findAll({
                where: {
                    titulo: {
                        [Op.like]: `%${cleantitulo}%`, // Usando LIKE para buscar titulos que contenham a substring
                    },
                },
            });

            // Verifica se algum autor foi encontrado
            if (book.length === 0) {
                return res.status(404).json({ message: 'Nenhum livro encontrado.' });
            }

            // Retornar os autores encontrados
            return res.status(200).json(book);
        } catch (error) {
            // Tratamento de erros inesperados
            return res.status(500).json({
                message: 'Erro ao buscar autor.',
                error: error.message,
            });
        }
    }

    // Atualizar um usuário
    static async updateBook(req, res) {
        try {
            const { id } = req.params;
            const { titulo, ano, paginas, ranking, avaliacao, Autor_idAutor, Genero_idGenero, Editora_idEditora } = req.body;

            // Buscar e atualizar o usuário
            const book = await Book.findByPk(id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }

            await book.update({ titulo, ano, paginas, ranking, avaliacao, Autor_idAutor, Genero_idGenero, Editora_idEditora });
            return res.status(200).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar Livros.', error: error.message });
        }
    }


    // Deletar um usuário
    static async deleteBook(req, res) {
        try {
            const { id } = req.params;

            // Buscar e deletar o usuário
            const book = await Book.findByPk(id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }

            await book.destroy();
            return res.status(200).json({ message: 'Livro deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar Livro.', error: error.message });
        }
    }
    


}

module.exports = BookModel;
