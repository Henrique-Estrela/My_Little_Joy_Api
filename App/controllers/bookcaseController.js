const BookcaseModel = require('../models/bookcaseModel'); // Importando o modelo
const BookcaseVModel = require('../models/bookcaseVModel'); // Importando o modelo

const BookModel = require('../models/bookModel'); // Importando o modelo
const UserModel = require('../models/userModel'); // Importando o modelo

const { Op } = require('sequelize');

class Bookcase {
    // Método para simular a criação de uma estante de livros
    static async createBookcase(req, res) {
        try {
            const { idBook, idUser } = req.body;

            // Validação simples
            if (!idBook || !idUser) {
                return res.status(400).json({ message: 'Os campos idBook e idUser são obrigatórios!' });
            }

            // Verificar se o livro e o usuário existem
            const bookExists = await BookModel.findByPk(idBook);

            const userExists = await UserModel.findByPk(idUser);

            if (!bookExists || !userExists) {
                return res.status(400).json({ message: 'Livro ou usuário não existem.' });
            }

            // Criar estante no banco
            const newBookcase = await BookcaseModel.create({ idBook, idUser });
            return res.status(201).json(newBookcase);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar estante.', error: error.message });
        }
    }

    // Método para buscar todas as estantes
    static async getAllBookcases(req, res) {
        try {
            const bookcases = await BookcaseVModel.findAll();
            return res.status(200).json(bookcases);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar estantes.', error: error.message });
        }
    }

    // Método para buscar uma estante por ID
    static async getBookcaseById(req, res) {
        try {
            const { id } = req.params;



            const bookcase = await BookcaseVModel.findByPk(id);
            if (!bookcase) {
                return res.status(404).json({ message: 'Estante não encontrada.' });
            }

            return res.status(200).json(bookcase);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar estante.', error: error.message });
        }
    }

    // Método para atualizar uma estante
    static async updateBookcase(req, res) {
        try {
            const { id } = req.params;
            const { idBook, idUser } = req.body;

            // Buscar e atualizar a estante
            const bookcase = await BookcaseModel.findByPk(id);
            if (!bookcase) {
                return res.status(404).json({ message: 'Estante não encontrada.' });
            }

            await bookcase.update({ idBook, idUser });
            return res.status(200).json(bookcase);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar estante.', error: error.message });
        }
    }

    // Método para deletar uma estante
    static async deleteBookcase(req, res) {
        try {
            const { id } = req.params;

            // Buscar e deletar a estante
            const bookcase = await BookcaseModel.findByPk(id);
            if (!bookcase) {
                return res.status(404).json({ message: 'Estante não encontrada.' });
            }

            await bookcase.destroy();
            return res.status(200).json({ message: 'Estante deletada com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar estante.', error: error.message });
        }
    }

    // Método para obter a quantidade total de estantes
    static async getBookcaseCount(req, res) {
        try {
            const { idUser } = req.params; // Usando query params

            // Verifica se o idUser foi fornecido
            if (!idUser) {
                return res.status(400).json({ message: 'O campo idUser é obrigatório para contar estantes.' });
            }

            // Contar estantes associadas ao idUser
            const count = await BookcaseModel.count({
                where: {
                    idUser: {
                        [Op.eq]: idUser // Filtra estantes pelo idUser
                    }
                }
            });

            return res.status(200).json({ count });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao contar estantes.', error: error.message });
        }
    }

    // Método para filtrar estantes por idUser
    static async filterBookcases(req, res) {
        try {
            const { idUser } = req.params;

            // Verifica se o idUser foi fornecido
            if (!idUser) {
                return res.status(400).json({ message: 'O campo idUser é obrigatório para filtrar.' });
            }

            const filteredBookcases = await BookcaseModel.findAll({
                where: {
                    idUser: {
                        [Op.eq]: idUser // Filtra estantes pelo idUser
                    }
                }
            });

            return res.status(200).json(filteredBookcases);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao filtrar estantes.', error: error.message });
        }
    }

    // Método para buscar uma estante por usuario e idBook
    static async getBookcaseByUserAndBook(req, res) {
        try {
            const { usuario, livroID } = req.params; // Obtendo usuario e livroID dos parâmetros

            // Verifica se o usuario e o livroID foram fornecidos
            if (!usuario || !livroID) {
                return res.status(400).json({ message: 'Os campos usuario e livroID são obrigatórios.' });
            }

            // Buscar a estante que contém o livro específico do usuário
            const bookcase = await BookcaseVModel.findOne({
                where: {
                    usuario: usuario,
                    livroID: livroID // Filtra pela combinação de usuario e livroID
                }
            });

            if (!bookcase) {
                return res.status(404).json({ message: 'Estante ou livro não encontrado para este usuário.' });
            }

            return res.status(200).json(bookcase);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar estante e livro.', error: error.message });
        }
    }
}

module.exports = Bookcase;
