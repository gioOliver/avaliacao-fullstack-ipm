# 📋 Agenda de Tarefas - Teste Técnico

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte de um teste técnico para demonstrar conhecimentos em:

* PHP
* MySQL
* React JS

A aplicação consiste em uma API REST em PHP integrada a um front-end em React, permitindo o gerenciamento de tarefas com operações de CRUD (Create, Read, Update, Delete), incluindo controle de status e datas.

---

## 🚀 Tecnologias utilizadas

* PHP 8.2
* MySQL 8
* Apache
* React JS
* Docker
* Docker Compose

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* [Git](https://git-scm.com/downloads)
* [Docker](https://www.docker.com/products/docker-desktop)
* Docker Compose

---

## 📥 Como executar o projeto

### 🔹 Opção 1: Download do .zip (recomendado)

1. Extraia o arquivo `.zip` em qualquer diretório
2. Acesse a pasta do projeto:

```bash
cd avaliacao-fullstack-ipm
```

---

### 🔹 Opção 2: Clonar o repositório

```bash
git clone https://github.com/gioOliver/avaliacao-fullstack-ipm.git
cd avaliacao-fullstack-ipm
```

---

## 🐳 Subindo os containers

```bash
docker compose up -d --build
```

---

## 🌐 Acessando a aplicação

* Front-end: http://localhost:5173
* API: http://localhost:8000
* phpMyAdmin: http://localhost:8081

### 🔑 Credenciais do banco

* Servidor: db
* Usuário: root
* Senha: root

---

## ⚠️ Configuração de portas

Caso alguma porta esteja em uso, você pode alterá-las no arquivo `.env`:

```env
APP_PORT=8000
PHPMYADMIN_PORT=8081
```

Após alterar, execute novamente:

```bash
docker compose down
docker compose up -d
```

---

## ⚠️ Observação sobre variáveis de ambiente

O arquivo `.env` está incluído no projeto com valores pré-configurados para facilitar a execução do teste.

🔒 Em um ambiente de produção, essas informações não devem ser versionadas. O ideal é utilizar variáveis de ambiente seguras e não expor credenciais no repositório.

---

## 🧩 Estrutura e padrões

O projeto foi desenvolvido seguindo boas práticas como:

* Organização em camadas no backend (Controller, Service e Model)
* Utilização de Programação Orientada a Objetos (POO)
* Separação de responsabilidades no front-end com componentes reutilizáveis
* Comunicação via API REST com autenticação JWT

---

## 🛠️ Problemas comuns

### ❗ Erro de permissão no Linux (EACCES)

Caso ocorra erro relacionado a permissões ao rodar o frontend, execute:

```bash
sudo chown -R $USER:$USER .
```

Depois:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 👨‍💻 Autor

Desenvolvido por Giovanni Oliveira.
