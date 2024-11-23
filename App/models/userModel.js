const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'user', 
  timestamps: false,    // Não criar `createdAt` e `updatedAt` automaticamente
});

module.exports = User;
