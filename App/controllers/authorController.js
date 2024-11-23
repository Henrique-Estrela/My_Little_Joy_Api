let authors = []; 

class Author {
    constructor(id, name, description, nationality) {
        this.id = id; 
        this.name = name;
        this.description = description;
        this.nationality = nationality; 
    }

    // Método para simular a criação de um autor
    static async createAuthor(data) {
        authors.push(data); 
        console.log("Autor criado:", data);
        return data; 
    }

    // Método para buscar todos os autores
    static async getAllAuthors() {
        return authors; 
    }

    // Método para buscar um autor por ID
    static async getAuthorById(id) {
        return authors.find(author => author.id === id); 
    }

    // Método para atualizar um autor
    static async updateAuthor(id, updatedData) {
        const index = authors.findIndex(author => author.id === id); 
        if (index !== -1) {
            authors[index] = { ...authors[index], ...updatedData };
            return authors[index]; 
        }
        return null;
    }

    // Método para deletar um autor
    static async deleteAuthor(id) {
        const index = authors.findIndex(author => author.id === id); 
        if (index !== -1) {
            const deletedAuthor = authors.splice(index, 1); 
            return deletedAuthor[0]; 
        }
        return null; 
    }
}

module.exports = Author;
