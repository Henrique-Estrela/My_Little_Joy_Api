let publishers = []; // Array para armazenar editoras em memória

class Publisher {
    constructor(id, name, description) {
        this.id = id; 
        this.name = name; 
        this.description = description;
    }

    // Método para simular a criação de uma editora
    static async createPublisher(data) {
        publishers.push(data); 
        console.log("Editora criada:", data);
        return data; 
    }

    // Método para buscar todas as editoras
    static async getAllPublishers() {
        return publishers; 
    }

    // Método para buscar uma editora por ID
    static async getPublisherById(id) {
        return publishers.find(publisher => publisher.id === id); 
    }

    // Método para atualizar uma editora
    static async updatePublisher(id, updatedData) {
        const index = publishers.findIndex(publisher => publisher.id === id); 
        if (index !== -1) {
            publishers[index] = { ...publishers[index], ...updatedData }; 
            return publishers[index]; 
        }
        return null; 
    }

    // Método para deletar uma editora
    static async deletePublisher(id) {
        const index = publishers.findIndex(publisher => publisher.id === id); 
        if (index !== -1) {
            const deletedPublisher = publishers.splice(index, 1); 
            return deletedPublisher[0]; 
        }
        return null; 
    }
}

module.exports = Publisher;
