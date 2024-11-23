const express = require('express');
const sequelize = require('./App/database/conexao'); // Configuração do Sequelize

var app = express();
const PORT = 3000;


app.use(express.json());

// // Carregando os roteadores
// try {
//     // let routerAuthor = require('./App/routers/author/index');
//     // routerAuthor(app);

//     // let routerBook = require('./App/routers/book/index');
//     // routerBook(app);

//     // let routerBookcase = require('./App/routers/bookcase/index');
//     // routerBookcase(app);

//     // let routerMyLyttleJoy = require('./App/routers/myLittleJoy/index');
//     // routerMyLyttleJoy(app);

//     // let routerPublisher = require('./App/routers/publisher/index');
//     // routerPublisher(app);

//     let routerUser = require('./App/routers/user/index');
//     routerUser(app);
    
// } catch (error) {
//     console.error('Erro ao carregar os roteadores:', error);
// }






const userRoutes = require('./App/routers/user/index'); // Rotas do usuário
userRoutes(app);

// Inicializar o servidor e sincronizar o banco
(async () => {
    try {
        await sequelize.sync();
        console.log('Conexão com o banco de dados estabelecida.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();

