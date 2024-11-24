const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const Publisher = sequelize.define('Publisher', {
    idEditora: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(500),
        allowNull: true
    }
}, {
    tableName: 'editora', // Nome da tabela no banco de dados
    timestamps: false // Desabilitar timestamps automáticos
});

module.exports = Publisher;
