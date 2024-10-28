const express = require('express');

var app = express();

app.use(express.json());

// Carregando os roteadores
try {
    let routerAuthor = require('./App/routers/author/index');
    routerAuthor(app);

    let routerBook = require('./App/routers/book/index');
    routerBook(app);

    let routerBookcase = require('./App/routers/bookcase/index');
    routerBookcase(app);

    let routerMyLyttleJoy = require('./App/routers/myLittleJoy/index');
    routerMyLyttleJoy(app);

    let routerPublisher = require('./App/routers/publisher/index');
    routerPublisher(app);

    let routerUser = require('./App/routers/user/index');
    routerUser(app);
    
} catch (error) {
    console.error('Erro ao carregar os roteadores:', error);
}

// Iniciando o servidor
app.listen(3000, function() {
    console.log("Servidor iniciado na porta 3000!");
});
