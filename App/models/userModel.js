let users = []; // Array para armazenar usuários em memória

class User {
    constructor(id, name, birthDate, email, password) {
        this.id = id; 
        this.name = name; 
        this.birthDate = birthDate; 
        this.email = email;
        this.password = password; 
    }

    // Método para simular a criação de um usuário
    static async createUser(data) {
        users.push(data); 
        console.log("Usuário criado:", data);
        return data; 
    }

    // Método para buscar todos os usuários
    static async getAllUsers() {
        return users; 
    }

    // Método para buscar um usuário por ID
    static async getUserById(id) {
        return users.find(user => user.id === id); 
    }

    // Método para atualizar um usuário
    static async updateUser(id, updatedData) {
        const index = users.findIndex(user => user.id === id); 
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedData }; 
            return users[index]; 
        }
        return null; 
    }

    // Método para deletar um usuário
    static async deleteUser(id) {
        const index = users.findIndex(user => user.id === id); 
        if (index !== -1) {
            const deletedUser = users.splice(index, 1); 
            return deletedUser[0]; 
        }
        return null; 
    }
}

module.exports = User;
