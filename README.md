<h1 align="center">
    <img alt="dm" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1609030679/dm-logo-horizontal_aojgxh.png" width="250px" />
</h1>

<p align="center">🚀 Uma API de receitas contruida utilizando Node.JS.</p>

<h1 align="center">

 ![GitHub top language](https://img.shields.io/github/languages/top/CampossCaio/dm-challenge)
 
</h1>

<h4 align="center"> 
	🚧  DM Challenge 🚀 Concluído  🚧
</h4>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a> 
</p>

## 💻 Sobre o projeto

Esse projeto consiste em uma API onde o usuário pode passar alguns ingredientes como parâmetro para um endpoint do tipo GET, e o mesmo retornará uma lista de receitas contendo esses ingredientes.

Projeto desenvolvido durante um teste tecnico proposto pela empresa [Delivery Much](https://www.deliverymuch.com.br/).


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/) e [Docker Composer](https://docs.docker.com/compose/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).


#### 🎲 Rodando o servidor

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/dm-challenge.git

# Acesse a pasta do projeto no terminal/cmd
$ cd dm-challenge

```

Na raiz do projeto, crie um arquivo .env e o preencha conforme o arquivo .env.example

```bash

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ docker-compose up

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

# Comando para executar os testes unitários
$ npm run test

```

---


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Docker](https://www.docker.com/)**
-   **[Docker Composer](https://docs.docker.com/compose/)**
-   **[ts-jest](https://kulshekhar.github.io/ts-jest/)**


## 🦸 Autor

<a href="https://github.com/CampossCaio">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/52550525?s=400&u=c8dfc4e1c8ef1bf3ed5890ecc40ee98f086ca72b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Campos</b></sub></a> <a href="https://github.com/CampossCaio" title="Caio Campos">🚀</a>
 <br />

---

Feito com ❤️ por **Caio Campos** 👋🏻 [Get in touch!](https://github.com/CampossCaio)
