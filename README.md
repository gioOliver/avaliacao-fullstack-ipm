# 📋 Agenda de Tarefas - Teste Técnico

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte de um teste técnico com o objetivo de demonstrar conhecimentos em:

* PHP
* MySQL
* React JS

A aplicação consiste em uma API para gerenciamento de tarefas, permitindo operações de CRUD (Create, Read, Update, Delete).

---

## 🚀 Tecnologias utilizadas

* PHP 8.2
* MySQL 8
* Apache
* Docker
* Docker Compose

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* Docker
* Docker Compose
* Git

---

## 📥 Como executar o projeto

### 1. Clonar o repositório

### 🔹 Opção 1: Download do .zip (recomendado)

1. Extraia o arquivo `.zip` em qualquer diretório
2. Acesse a pasta do projeto:

```bash
cd avaliacao-fullstack-ipm
```

---

### 🔹 Opção 2: Clonar o repositório (opcional)

```bash
git clone https://github.com/gioOliver/avaliacao-fullstack-ipm.git
cd avaliacao-fullstack-ipm
```

---

### 2. Subir os containers

```bash
docker-compose up -d --build
```

---

### 3. Acessar o sistema

* API:
  http://localhost:8000

* phpMyAdmin:
  http://localhost:8081

  **Credenciais:**

    * Servidor: db
    * Usuário: root
    * Senha: root

---



## ⚠️ Configuração de portas

Caso alguma porta esteja em uso, você pode alterá-las no arquivo `.env`:

```
APP_PORT=8000
PHPMYADMIN_PORT=8081
```

Após alterar, execute novamente:

```bash
docker-compose down
docker-compose up -d
```

---


## 👨‍💻 Autor

Desenvolvido por Giovanni Oliveira.
