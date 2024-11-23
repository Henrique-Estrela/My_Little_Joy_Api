const User = require('../models/userModel'); // Modelo Sequelize que você já criou

class UserController {
    // Criar um novo usuário
    static async createUser(req, res) {
        try {
            const { nome, dataNascimento, email, senha } = req.body;

            // Validação simples
            if (!nome || !dataNascimento || !email || !senha) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
            }

            // Criar usuário no banco
            const newUser = await User.create({ nome, dataNascimento, email, senha });
            return res.status(201).json(newUser);
        } catch (error) {
            // Tratamento de erro (ex.: email duplicado)
            return res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message });
        }
    }

    // Buscar todos os usuários
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuários.', error: error.message });
        }
    }

    // Buscar usuário por ID
    static async getUserById(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuário.', error: error.message });
        }
    }

    // Atualizar um usuário
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { Nome, dataNascimento, Email, Senha } = req.body;

            // Buscar e atualizar o usuário
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            await user.update({ Nome, dataNascimento, Email, Senha });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar usuário.', error: error.message });
        }
    }

    // Deletar um usuário
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;

            // Buscar e deletar o usuário
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            await user.destroy();
            return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar usuário.', error: error.message });
        }
    }
    
}

module.exports = UserController;














// let users = []; // Array para armazenar usuários em memória

// class User {
//     constructor(id, name, birthDate, email, password) {
//         this.id = id; 
//         this.name = name; 
//         this.birthDate = birthDate; 
//         this.email = email;
//         this.password = password; 
//     }

//     // Método para simular a criação de um usuário
//     static async createUser(data) {
//         users.push(data); 
//         console.log("Usuário criado:", data);
//         return data; 
//     }





//     // Método para buscar todos os usuários
//     static async getAllUsers() {
//         return users; 
//     }

//     // Método para buscar um usuário por ID
//     static async getUserById(id) {
//         return users.find(user => user.id === id); 
//     }

//     // Método para atualizar um usuário
//     static async updateUser(id, updatedData) {
//         const index = users.findIndex(user => user.id === id); 
//         if (index !== -1) {
//             users[index] = { ...users[index], ...updatedData }; 
//             return users[index]; 
//         }
//         return null; 
//     }

//     // Método para deletar um usuário
//     static async deleteUser(id) {
//         const index = users.findIndex(user => user.id === id); 
//         if (index !== -1) {
//             const deletedUser = users.splice(index, 1); 
//             return deletedUser[0]; 
//         }
//         return null; 
//     }
// }

// module.exports = User;
