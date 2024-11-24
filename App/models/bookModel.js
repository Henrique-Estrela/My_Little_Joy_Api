const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexao');


// Model caso queira pegar a tabela Livro
const Book = sequelize.define('Book', {
    idLivro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paginas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ranking: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    avaliacao: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    Autor_idAutor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Autor',
            key: 'idAutor'
        }
    },
    Genero_idGenero: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Genero',
            key: 'idGenero'
        }
    },
    Editora_idEditora: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Editora',
            key: 'idEditora'
        }
    }
}, {
    tableName: 'livro', // Nome da tabela no banco de dados
    timestamps: false // Desabilitar timestamps automáticos
});



module.exports = Book;

