# My Little Joy API

## Última Versão
[![Versão do Projeto](https://img.shields.io/badge/vers%C3%A3o-1.0.0-brightgreen.svg)](https://github.com/seu_usuario/seu_repositorio/releases)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)


Uma API RESTful para gerenciar um sistema de biblioteca, permitindo a criação, leitura, atualização e exclusão de usuários, autores, livros, editoras e estantes de livros.

## Funcionalidades
- **Gerenciamento de Usuários**
  - Criar, buscar, atualizar e deletar usuários.
- **Gerenciamento de Autores**
  - Criar, buscar, atualizar e deletar autores.
- **Gerenciamento de Livros**
  - Criar, buscar, atualizar e deletar livros.
- **Gerenciamento de Editoras**
  - Criar, buscar, atualizar e deletar editoras.
- **Gerenciamento de Estantes de Livros**
  - Criar, buscar, atualizar e deletar estantes de livros.
  - Filtrar estantes de livros por usuário.
  - Contar o número de estantes de livros de um usuário.

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
      "ranking": 5,
      "avaliacao": 4,
      "Autor_idAutor": 1,
      "Genero_idGenero": 2,
      "Editora_idEditora": 1
    }
    ```

- **Buscar Todos os Livros**
  - **Endpoint:** `GET /books`

- **Buscar Livro por ID**
  - **Endpoint:** `GET /books/{id}`

- **Buscar Livro por Título**
  - **Endpoint:** `GET /books/name/{titulo}`

### Editoras

- **Criar Editora**
  - **Endpoint:** `POST /publishers/create`
  - **Body:**
    ```json
    {
      "nome": "Editora Globo",
      "descricao": "Editora brasileira especializada em livros e revistas."
    }
    ```

- **Buscar Todas as Editoras**
  - **Endpoint:** `GET /publishers`

- **Buscar Editora por ID**
  - **Endpoint:** `GET /publishers/{id}`

### Estantes de Livros

- **Criar Estante de Livro**
  - **Endpoint:** `POST /bookcases/create`
  - **Body:**
    ```json
    {
      "idBook": 1,
      "idUser": 1
    }
    ```

- **Buscar Todas as Estantes de Livros**
  - **Endpoint:** `GET /bookcases/getAll`

- **Buscar Estante de Livro por ID**
  - **Endpoint:** `GET /bookcases/{id}`

- **Contar Estantes de Livros de um Usuário**
  - **Endpoint:** `GET /bookcases/count/{idUser}`

- **Filtrar Estantes de Livros de um Usuário**
  - **Endpoint:** `GET /bookcases/filter/{idUser}`

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato
Para mais informações, entre em contato com [seu_email@example.com](mailto:seu_email@example.com).