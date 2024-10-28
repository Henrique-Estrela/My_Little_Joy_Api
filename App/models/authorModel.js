let authors = []; // Array para armazenar autores em memória

class Author {
    constructor(id, name, description, nationality) {
        this.id = id; // ID fornecido pelo usuário
        this.name = name;
        this.description = description;
        this.nationality = nationality; // Adicionando nacionalidade
    }

    // Método para simular a criação de um autor
    static async createAuthor(data) {
        authors.push(data); // Adiciona o autor ao array
        console.log("Autor criado:", data);
        return data; // Retorna os dados do autor criado
    }

    // Método para buscar todos os autores
    static async getAllAuthors() {
        return authors; // Retorna todos os autores
    }

    // Método para buscar um autor por ID
    static async getAuthorById(id) {
        return authors.find(author => author.id === id); // Retorna o autor com o ID correspondente
    }

    // Método para atualizar um autor
    static async updateAuthor(id, updatedData) {
        const index = authors.findIndex(author => author.id === id); // Encontra o índice do autor
        if (index !== -1) {
            authors[index] = { ...authors[index], ...updatedData }; // Atualiza os dados do autor
            return authors[index]; // Retorna o autor atualizado
        }
        return null; // Retorna null se o autor não for encontrado
    }

    // Método para deletar um autor
    static async deleteAuthor(id) {
        const index = authors.findIndex(author => author.id === id); // Encontra o índice do autor
        if (index !== -1) {
            const deletedAuthor = authors.splice(index, 1); // Remove o autor do array
            return deletedAuthor[0]; // Retorna o autor removido
        }
        return null; // Retorna null se o autor não for encontrado
    }
}

module.exports = Author;
