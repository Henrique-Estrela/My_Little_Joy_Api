const User = require('../models/userModel'); // Modelo Sequelize que você já criou
const bcrypt = require('bcrypt'); // Importando bcrypt para fazer o hash da senha
const jwt = require('jsonwebtoken'); // Importando jsonwebtoken
require('dotenv').config(); 

class UserController {
    // Criar um novo usuário
    static async createUser(req, res) {
        try {
            const { nome, dataNascimento, email, senha } = req.body;

            // Validação simples
            if (!nome || !dataNascimento || !email || !senha) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
            }

            // Hash da senha antes de armazená-la
            const hashedPassword = await bcrypt.hash(senha, 10); // O número 10 é o salt rounds

            // Criar usuário no banco com a senha hasheada
            const newUser = await User.create({ nome, dataNascimento, email, senha: hashedPassword });
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
            const { nome, dataNascimento, email, senha } = req.body;

            // Buscar o usuário
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            // Se a senha for fornecida, faça o hash antes de atualizar
            if (senha) {
                const hashedPassword = await bcrypt.hash(senha, 10); // Hash da nova senha
                await user.update({ nome, dataNascimento, email, senha: hashedPassword });
            } else {
                // Se a senha não for fornecida, apenas atualize os outros campos
                await user.update({ nome, dataNascimento, email });
            }

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

    // Método para fazer login
    static async login(req, res) {
        try {
            const { email, senha } = req.body; 

            if (!email || !senha) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
            }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            const isPasswordValid = await bcrypt.compare(senha, user.senha);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Senha incorreta.' });
            }

            // Gerar um token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
            return res.status(200).json({
                message: "Login bem-sucedido!",
                token // Retorna o token JWT
                
            });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao fazer login.', error: error.message });
        }
    }
}

module.exports = UserController;