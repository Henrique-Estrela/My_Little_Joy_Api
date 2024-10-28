let books = []; // Array para armazenar livros em memória

class Book {
    constructor(id, title, year, pages, rank, rating, authorId, genreId, publisherId) {
        this.id = id; 
        this.title = title;
        this.year = year;
        this.pages = pages;
        this.rank = rank;
        this.rating = rating;
        this.authorId = authorId; 
        this.genreId = genreId;
        this.publisherId = publisherId; 
    }

    // Método para simular a criação de um livro
    static async createBook(data) {
        books.push(data); 
        console.log("Livro criado:", data);
        return data; 
    }

    // Método para buscar todos os livros
    static async getAllBooks() {
        return books; 
    }

    // Método para buscar um livro por ID
    static async getBookById(id) {
        return books.find(book => book.id === id); 
    }

    // Método para atualizar um livro
    static async updateBook(id, updatedData) {
        const index = books.findIndex(book => book.id === id); 
        if (index !== -1) {
            books[index] = { ...books[index], ...updatedData }; 
            return books[index]; 
        }
        return null; 
    }

    // Método para deletar um livro
    static async deleteBook(id) {
        const index = books.findIndex(book => book.id === id); 
        if (index !== -1) {
            const deletedBook = books.splice(index, 1); 
            return deletedBook[0]; 
        }
        return null; 
    }
}

module.exports = Book;
