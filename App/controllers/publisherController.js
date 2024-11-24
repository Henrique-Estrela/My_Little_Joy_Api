const Publisher = require('../models/publisherModel'); // Importando o modelo

class PublisherModel {
    // Método para criar uma editora
    static async createPublisher(req, res) {
        try {
            const { nome, descricao } = req.body;

            if (!nome || !descricao) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
            }

            const newPublisher = await Publisher.create({nome, descricao}); // Criando e salvando no banco de dados
            console.log("Editora criada:", newPublisher);
            return res.status(200).json(newPublisher); // Retornando a editora criada
        } catch (error) {
            console.error("Erro ao criar editora:", error);
            return res.status(500).json({ error: "Erro ao criar editora" }); // Retornando erro
        }
    }

    // Método para buscar todas as editoras
    static async getAllPublishers(req, res) {
        try {
            const publishers = await Publisher.findAll(); // Buscando todas as editoras do banco de dados
            return res.status(200).json(publishers); // Retornando a lista de editoras
        } catch (error) {
            console.error("Erro ao buscar editoras:", error);
            return res.status(500).json({ error: "Erro ao buscar editoras" }); // Retornando erro
        }
    }

    // Método para buscar uma editora por ID
    static async getPublisherById(req, res) {
        try {
            const { id } = req.params; // Obtendo o ID da requisição

            const publisher = await Publisher.findByPk(id); // Buscando uma editora pelo ID

            if (!publisher) {
                return res.status(404).json({ error: "Editora não encontrada" }); // Retornando erro se não encontrado
            }

            return res.status(200).json(publisher); // Retornando a editora encontrada
        } catch (error) {
            console.error("Erro ao buscar editora por ID:", error);
            return res.status(500).json({ error: "Erro ao buscar editora" }); // Retornando erro
        }
    }

    // Método para atualizar uma editora
    static async updatePublisher(req, res) {
        
        try {
            const { id } = req.params; // Obtendo o ID da requisição
            const { nome, descricao  } = req.body;

            const publisher = await Publisher.findByPk(id); // Buscando a editora
            if (!publisher) {
                return res.status(404).json({ error: "Editora não encontrada" }); // Retornando erro se não encontrado
            }

            const updatedPublisher = await publisher.update({nome, descricao}); // Atualizando a editora
            return res.status(200).json(updatedPublisher); // Retornando a editora atualizada
        } catch (error) {
            console.error("Erro ao atualizar editora:", error);
            return res.status(500).json({ error: "Erro ao atualizar editora" }); // Retornando erro
        }
    }

    // Método para deletar uma editora
    static async deletePublisher(req, res) {
        const { id } = req.params; // Obtendo o ID da requisição
        try {
            const publisher = await Publisher.findByPk(id); // Buscando a editora
            if (!publisher) {
                return res.status(404).json({ error: "Editora não encontrada" }); // Retornando erro se não encontrado
            }

            await publisher.destroy(); // Deletando a editora
            return res.status(200).json({ message: 'Editora deletada com sucesso.' }); // Retornando sucesso sem conteúdo
        } catch (error) {
            console.error("Erro ao deletar editora:", error);
            return res.status(500).json({ error: "Erro ao deletar editora" }); // Retornando erro
        }
    }
}

module.exports = PublisherModel;
