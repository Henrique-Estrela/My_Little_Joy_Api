let bookcases = []; // Array para armazenar estantes de livros em memória

class Bookcase {
    constructor(id, bookId, userId) {
        this.id = id; 
        this.bookId = bookId; 
        this.userId = userId; 
    }

    // Método para simular a criação de uma estante de livros
    static async createBookcase(data) {
        bookcases.push(data); 
        console.log("Estante criada:", data);
        return data; 
    }

    // Método para buscar todas as estantes
    static async getAllBookcases() {
        return bookcases; 
    }

    // Método para buscar uma estante por ID
    static async getBookcaseById(id) {
        return bookcases.find(bookcase => bookcase.id === id); 
    }

    // Método para atualizar uma estante
    static async updateBookcase(id, updatedData) {
        const index = bookcases.findIndex(bookcase => bookcase.id === id); 
        if (index !== -1) {
            bookcases[index] = { ...bookcases[index], ...updatedData }; 
            return bookcases[index]; 
        }
        return null; 
    }

    // Método para deletar uma estante
    static async deleteBookcase(id) {
        const index = bookcases.findIndex(bookcase => bookcase.id === id); 
        if (index !== -1) {
            const deletedBookcase = bookcases.splice(index, 1); 
            return deletedBookcase[0]; 
        }
        return null; 
    }
}

module.exports = Bookcase;
