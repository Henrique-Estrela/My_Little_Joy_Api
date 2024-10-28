let publishers = []; // Array para armazenar editoras em memória

class Publisher {
    constructor(id, name, description) {
        this.id = id; // ID fornecido pelo usuário
        this.name = name; // Nome da editora
        this.description = description; // Descrição da editora
    }

    // Método para simular a criação de uma editora
    static async createPublisher(data) {
        publishers.push(data); // Adiciona a editora ao array
        console.log("Editora criada:", data);
        return data; // Retorna os dados da editora criada
    }

    // Método para buscar todas as editoras
    static async getAllPublishers() {
        return publishers; // Retorna todas as editoras
    }

    // Método para buscar uma editora por ID
    static async getPublisherById(id) {
        return publishers.find(publisher => publisher.id === id); // Retorna a editora com o ID correspondente
    }

    // Método para atualizar uma editora
    static async updatePublisher(id, updatedData) {
        const index = publishers.findIndex(publisher => publisher.id === id); // Encontra o índice da editora
        if (index !== -1) {
            publishers[index] = { ...publishers[index], ...updatedData }; // Atualiza os dados da editora
            return publishers[index]; // Retorna a editora atualizada
        }
        return null; // Retorna null se a editora não for encontrada
    }

    // Método para deletar uma editora
    static async deletePublisher(id) {
        const index = publishers.findIndex(publisher => publisher.id === id); // Encontra o índice da editora
        if (index !== -1) {
            const deletedPublisher = publishers.splice(index, 1); // Remove a editora do array
            return deletedPublisher[0]; // Retorna a editora removida
        }
        return null; // Retorna null se a editora não for encontrada
    }
}

module.exports = Publisher;
