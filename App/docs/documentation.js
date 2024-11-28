const swaggerJSDoc = require('swagger-jsdoc');
const schema = require('./schema.json');  // Carregar o schema de usuário diretamente

// const swaggerDefinition = {
//   info: {
//     title: "My Little Joy API",
//     version: "1.0.00",
//     description: "Documentação de APIs de forma fácil",
//   },
//   servers: [
//     {
//       url: "http://localhost:3000",
//     },
//   ],
//   components: {
//     schemas: schema,  // Aqui você já está passando o schema para a seção components/schemas
//   },
// };

const swaggerDefinition = {
    info: {
        title: "My Little Joy API",
        version: "1.0.00",
        description: "Documentação de APIs de forma fácil"
    },
    servers: [
      {
        "url": "http://localhost:3000"
      }
    ],
    components: {
        schemas: schema,
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    },
    
};


const swaggerOptions = {
  definition: swaggerDefinition,  // Usa o schema base
  apis: [
    './App/routers/user/*.js',  
    './App/routers/author/*.js', 
    './App/routers/book/*.js', 
    './App/routers/bookcase/*.js', 
    './App/routers/publisher/*.js', 

  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
