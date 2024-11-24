const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');

// Modelo para a view estantecompleta
const EstanteCompleta = sequelize.define('EstanteCompleta', {
    estanteID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Definindo a chave primária
    },
    usuario: {
        type: DataTypes.STRING(200), // Ajuste o tipo conforme necessário
    },
    livroID: {
        type: DataTypes.INTEGER,
        field:''
    },
    titulo: {
        type: DataTypes.STRING(300),
        field:'titulo'

    },
    ano: {
        type: DataTypes.INTEGER,
        field:'ano'

    },
    paginas: {
        type: DataTypes.INTEGER,
        field:'paginas'

    },
    ranking: {
        type: DataTypes.INTEGER,
        field:'ranking'

    },
    avaliacao: {
        type: DataTypes.INTEGER,
        field:'avaliacao'

    },
    autor: {
        type: DataTypes.STRING(200),
        field:'autor'

    },
    genero: {
        type: DataTypes.STRING(200),
        field:'genero'

    },
    editora: {
        type: DataTypes.STRING(200),
        field:'editora'

    }
}, {
    tableName: 'estantecompleta', // Nome da view no banco de dados
    timestamps: false, // Desabilitar timestamps automáticos
    // Se a view não tiver uma chave primária, você pode definir `primaryKey: false` para evitar erros
});

module.exports = EstanteCompleta;





