let bookcases = []; // Array para armazenar estantes de livros em memória

class Bookcase {
    constructor(id, bookId, userId) {
        this.id = id; // ID fornecido pelo usuário
        this.bookId = bookId; // Chave estrangeira do livro
        this.userId = userId; // Chave estrangeira do usuário
    }

    // Método para simular a criação de uma estante de livros
    static async createBookcase(data) {
        bookcases.push(data); // Adiciona a estante ao array
        console.log("Estante criada:", data);
        return data; // Retorna os dados da estante criada
    }

    // Método para buscar todas as estantes
    static async getAllBookcases() {
        return bookcases; // Retorna todas as estantes
    }

    // Método para buscar uma estante por ID
    static async getBookcaseById(id) {
        return bookcases.find(bookcase => bookcase.id === id); // Retorna a estante com o ID correspondente
    }

    // Método para atualizar uma estante
    static async updateBookcase(id, updatedData) {
        const index = bookcases.findIndex(bookcase => bookcase.id === id); // Encontra o índice da estante
        if (index !== -1) {
            bookcases[index] = { ...bookcases[index], ...updatedData }; // Atualiza os dados da estante
            return bookcases[index]; // Retorna a estante atualizada
        }
        return null; // Retorna null se a estante não for encontrada
    }

    // Método para deletar uma estante
    static async deleteBookcase(id) {
        const index = bookcases.findIndex(bookcase => bookcase.id === id); // Encontra o índice da estante
        if (index !== -1) {
            const deletedBookcase = bookcases.splice(index, 1); // Remove a estante do array
            return deletedBookcase[0]; // Retorna a estante removida
        }
        return null; // Retorna null se a estante não for encontrada
    }
}

module.exports = Bookcase;
