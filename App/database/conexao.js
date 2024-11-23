const { Sequelize } = require('sequelize');

// Configuração da conexão
const sequelize = new Sequelize('mlj', 'root', 'Henrique2004#', {
  host: 'localhost', 
  dialect: 'mysql', 
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;

