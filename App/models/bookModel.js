let books = []; // Array para armazenar livros em memória

class Book {
    constructor(id, title, year, pages, rank, rating, authorId, genreId, publisherId) {
        this.id = id; // ID fornecido pelo usuário
        this.title = title;
        this.year = year;
        this.pages = pages;
        this.rank = rank;
        this.rating = rating;
        this.authorId = authorId; // Chave estrangeira do autor
        this.genreId = genreId; // Chave estrangeira do gênero
        this.publisherId = publisherId; // Chave estrangeira da editora
    }

    // Método para simular a criação de um livro
    static async createBook(data) {
        books.push(data); // Adiciona o livro ao array
        console.log("Livro criado:", data);
        return data; // Retorna os dados do livro criado
    }

    // Método para buscar todos os livros
    static async getAllBooks() {
        return books; // Retorna todos os livros
    }

    // Método para buscar um livro por ID
    static async getBookById(id) {
        return books.find(book => book.id === id); // Retorna o livro com o ID correspondente
    }

    // Método para atualizar um livro
    static async updateBook(id, updatedData) {
        const index = books.findIndex(book => book.id === id); // Encontra o índice do livro
        if (index !== -1) {
            books[index] = { ...books[index], ...updatedData }; // Atualiza os dados do livro
            return books[index]; // Retorna o livro atualizado
        }
        return null; // Retorna null se o livro não for encontrado
    }

    // Método para deletar um livro
    static async deleteBook(id) {
        const index = books.findIndex(book => book.id === id); // Encontra o índice do livro
        if (index !== -1) {
            const deletedBook = books.splice(index, 1); // Remove o livro do array
            return deletedBook[0]; // Retorna o livro removido
        }
        return null; // Retorna null se o livro não for encontrado
    }
}

module.exports = Book;
