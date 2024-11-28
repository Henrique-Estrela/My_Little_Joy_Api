const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');


const Author = sequelize.define('Author', {
  idAutor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  nacionalidade: {
    type: DataTypes.STRING(200),
    allowNull: true,
  }
}, {
  tableName: 'autor', 
  timestamps: false,    // Não criar `createdAt` e `updatedAt` automaticamente
});

module.exports = Author;
