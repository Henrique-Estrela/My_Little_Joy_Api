const Author = require('../models/authorModel'); // Modelo Sequelize que você já criou
const { Op } = require('sequelize');

class AuthorController {
    // Criar um novo autor
    static async createAuthor(req, res) {
        try {
            const { nome, descricao, nacionalidade } = req.body;

            // Validação simples
            if (!nome) {
                return res.status(400).json({ message: 'O nome é obrigatório!' });
            }

            // Criar autor no banco
            const newAuthor = await Author.create({ nome, descricao, nacionalidade });
            return res.status(201).json(newAuthor);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar autor.', error: error.message });
        }
    }

    // Buscar todos os autores
    static async getAllAuthors(req, res) {
        try {
            const authors = await Author.findAll();
            return res.status(200).json(authors);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar autores.', error: error.message });
        }
    }

    // Buscar autor por ID
    static async getAuthorById(req, res) {
        try {
            const { id } = req.params;

            const author = await Author.findByPk(id);
            if (!author) {
                return res.status(404).json({ message: 'Autor não encontrado.' });
            }

            return res.status(200).json(author);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar autor.', error: error.message });
        }
    }



    static async getAuthorByName(req, res) {
        try {
            const { nome } = req.params;

            // Validação de nome não vazio e sem espaços extras
            if (!nome || nome.trim() === '') {
                return res.status(400).json({ message: 'O nome do autor é obrigatório.' });
            }

            // Limpeza do nome, removendo espaços extras
            const cleanNome = nome.trim();

            // Buscar o autor no banco de dados pela coluna 'nome' na tabela 'autor' usando LIKE
            const authors = await Author.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${cleanNome}%`, // Usando LIKE para buscar nomes que contenham a substring
                    },
                },
            });

            // Verifica se algum autor foi encontrado
            if (authors.length === 0) {
                return res.status(404).json({ message: 'Nenhum autor encontrado.' });
            }

            // Retornar os autores encontrados
            return res.status(200).json(authors);
        } catch (error) {
            // Tratamento de erros inesperados
            return res.status(500).json({
                message: 'Erro ao buscar autor.',
                error: error.message,
            });
        }
    }
    
    

    // Atualizar um autor
    static async updateAuthor(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao, nacionalidade } = req.body;

            // Buscar e atualizar o autor
            const author = await Author.findByPk(id);
            if (!author) {
                return res.status(404).json({ message: 'Autor não encontrado.' });
            }

            await author.update({ nome, descricao, nacionalidade });
            return res.status(200).json(author);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar autor.', error: error.message });
        }
    }

    // Deletar um autor
    static async deleteAuthor(req, res) {
        try {
            const { id } = req.params;

            // Buscar e deletar o autor
            const author = await Author.findByPk(id);
            if (!author) {
                return res.status(404).json({ message: 'Autor no encontrado.' });
            }

            await author.destroy();
            return res.status(200).json({ message: 'Autor deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar autor.', error: error.message });
        }
    }
}

module.exports = AuthorController;
