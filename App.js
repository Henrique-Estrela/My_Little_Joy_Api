const express = require('express');
const sequelize = require('./App/database/conexao'); // Configuração do Sequelize
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./App/docs/documentation');

const app = express();
const PORT = 3000;

app.use(express.json());





app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


try {
    
    const routerAuthor = require('./App/routers/author/index');
    routerAuthor(app);

    const routerBook = require('./App/routers/book/index');
    routerBook(app);

    const routerBookcase = require('./App/routers/bookcase/index');
    routerBookcase(app);

    const routerMLJ = require('./App/routers/myLittleJoy/index');
    routerMLJ(app);

    const routerPublisher = require('./App/routers/publisher/index');
    routerPublisher(app);

    const routerUser = require('./App/routers/user/index');
    routerUser(app);
   

    // Inicializar o servidor e sincronizar o banco
    (async () => {
        try {
            await sequelize.sync();
            console.log('Conexão com o banco de dados estabelecida.');
            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`)
            });
            console.log('Documentação disponível em http://localhost:3000/api-docs');

        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
        }
    })();


} catch (error) {
    console.error('Erro ao carregar os roteadores:', error);
}

