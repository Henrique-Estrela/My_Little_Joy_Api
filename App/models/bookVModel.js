const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');


// Model caso queira pegar a View do Livro
const LivrosView = sequelize.define('LivrosView', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Definindo a chave primária
  },
  titulo: {
    type: DataTypes.STRING(300),
    field: 'titulo' // Nome da coluna na view
  },
  ano: {
    type: DataTypes.INTEGER,
    field: 'ano' // Nome da coluna na view
  },
  paginas: {
    type: DataTypes.INTEGER,
    field: 'paginas' // Nome da coluna na view
  },
  autor: {
    type: DataTypes.STRING(200), // Ajuste o tipo conforme necessário
    field: 'autor' // Nome da coluna na view
  },
  genero: {
    type: DataTypes.STRING(200), // Ajuste o tipo conforme necessário
    field: 'genero' // Nome da coluna na view
  },
  editora: {
    type: DataTypes.STRING(200), // Ajuste o tipo conforme necessário
    field: 'editora' // Nome da coluna na view
  }
}, {
  tableName: 'livrocompleto', // Nome da view no banco de dados
  timestamps: false, // Desabilitar timestamps automáticos
  // Se a view não tiver uma chave primária, você pode definir `primaryKey: false` para evitar erros
});

module.exports = LivrosView;

