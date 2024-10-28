let users = []; // Array para armazenar usuários em memória

class User {
    constructor(id, name, birthDate, email, password) {
        this.id = id; // ID fornecido pelo usuário
        this.name = name; // Nome do usuário
        this.birthDate = birthDate; // Data de nascimento
        this.email = email; // Email do usuário
        this.password = password; // Senha do usuário
    }

    // Método para simular a criação de um usuário
    static async createUser(data) {
        users.push(data); // Adiciona o usuário ao array
        console.log("Usuário criado:", data);
        return data; // Retorna os dados do usuário criado
    }

    // Método para buscar todos os usuários
    static async getAllUsers() {
        return users; // Retorna todos os usuários
    }

    // Método para buscar um usuário por ID
    static async getUserById(id) {
        return users.find(user => user.id === id); // Retorna o usuário com o ID correspondente
    }

    // Método para atualizar um usuário
    static async updateUser(id, updatedData) {
        const index = users.findIndex(user => user.id === id); // Encontra o índice do usuário
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedData }; // Atualiza os dados do usuário
            return users[index]; // Retorna o usuário atualizado
        }
        return null; // Retorna null se o usuário não for encontrado
    }

    // Método para deletar um usuário
    static async deleteUser(id) {
        const index = users.findIndex(user => user.id === id); // Encontra o índice do usuário
        if (index !== -1) {
            const deletedUser = users.splice(index, 1); // Remove o usuário do array
            return deletedUser[0]; // Retorna o usuário removido
        }
        return null; // Retorna null se o usuário não for encontrado
    }
}

module.exports = User;
