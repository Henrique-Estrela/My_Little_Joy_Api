const { Sequelize } = require('sequelize');
require('dotenv').config(); 


// Configuração da conexão
const sequelize = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST, 
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

