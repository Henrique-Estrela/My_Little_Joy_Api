# My Little Joy API

## Última Versão
[![Packagist](https://img.shields.io/packagist/v/your-username/my-little-joy-api.svg)](https://packagist.org/packages/your-username/my-little-joy-api)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![Total Downloads](https://img.shields.io/packagist/dt/your-username/my-little-joy-api.svg)](https://packagist.org/packages/your-username/my-little-joy-api)

Uma API RESTful para gerenciar um sistema de biblioteca, permitindo a criação, leitura, atualização e exclusão de usuários, autores, livros, editoras e estantes de livros.

## Funcionalidades
- Gerenciamento de usuários
- Gerenciamento de autores
- Gerenciamento de livros
- Gerenciamento de editoras
- Gerenciamento de estantes de livros

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- PostgreSQL (ou outro banco de dados)
- JWT para autenticação

## Instalação

### Via Composer
```bash
$ composer require your-username/my-little-joy-api
```

## Uso

A API está disponível em `http://localhost:3000`. Aqui estão alguns exemplos de endpoints:

### Usuários

- **Criar Usuário**
  - **Endpoint:** `POST /users/create`
  - **Body:**
    ```json
    {
      "nome": "Alice",
      "dataNascimento": "1990-01-01",
      "email": "alice@example.com",
      "senha": "senha123"
    }
    ```

- **Buscar Todos os Usuários**
  - **Endpoint:** `GET /users/getAll`

### Autores

- **Criar Autor**
  - **Endpoint:** `POST /authors/create`
  - **Body:**
    ```json
    {
      "nome": "J.K. Rowling",
      "descricao": "Escritora britânica conhecida pela série Harry Potter.",
      "nacionalidade": "Britânica"
    }
    ```

- **Buscar Todos os Autores**
  - **Endpoint:** `GET /authors`

### Livros

- **Criar Livro**
  - **Endpoint:** `POST /books/create`
  - **Body:**
    ```json
    {
      "titulo": "Harry Potter e a Pedra Filosofal",
      "ano": 1997,
      "paginas": 223,
      "Autor_idAutor": 1,
      "Genero_idGenero": 1,
      "Editora_idEditora": 1
    }
    ```

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato
Para mais informações, entre em contato com [Henriqueestrela2004@gmail.com](mailto:Henriqueestrela2004@gmail.com).