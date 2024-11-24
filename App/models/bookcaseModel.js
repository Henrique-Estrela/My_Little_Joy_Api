const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

// Modelo para a estante de livros
const Bookcase = sequelize.define('Bookcase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idBook: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Book', // Nome da tabela de livros
            key: 'idLivro' // Chave primária da tabela de livros
        }
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User', // Nome da tabela de usuários
            key: 'id' // Chave primária da tabela de usuários
        }
    }
}, {
    tableName: 'estante', // Nome da tabela no banco de dados
    timestamps: false // Desabilitar timestamps automáticos
});

module.exports = Bookcase;
