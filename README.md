# MVC-Architecture

## Descrição

Este repositório contém um projeto de CRUD (Create, Read, Update, Delete) desenvolvido em Node.js utilizando a arquitetura MVC (Model-View-Controller) e o ORM Sequelize para a conexão com o banco de dados Postgres.

## Funcionalidades

- Create: Adiciona novos registros usuários.
- Read: Recupera registros do banco de dados.
- Update: Atualiza registros usuários existentes no banco de dados.
- Delete: Remove registros do banco de dados.

## Tecnologias Utilizadas

- JavaScript
- TypeScript
- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL

## Estrutura do Projeto

- models: Contém os modelos de dados que representam as tabelas do banco de dados.
- controllers: Responsável por lidar com a lógica de negócios e intermediar entre as rotas e os modelos.
- routes: Define as rotas da aplicação.
- config: Arquivos de configuração, incluindo configuração do banco de dados Sequelize.

## Instalação

1. Clone o repositório através do comando "git clone https://github.com/Ivisonj/MVC-Architecture.git"
2. Instale as dependências do projeto com o comando "npm install"
3. Transforme o arquivo "_env" em um arquivo ".env". 
4. Digite o comando "npx sequelize db:create" para criar um  banco de dados. 
5. Digite o comando "npx sequelize migration:create --name=create_table_user".
6. Digite o comando "npx sequelize-cli db:migrate". 
7. Inicie o servidor atrvés do comando "npm run dev".

A aplicação estará disponível em http://localhost:3000.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs, ou novas funcionalidades.