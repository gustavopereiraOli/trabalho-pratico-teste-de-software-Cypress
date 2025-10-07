# Trabalho Prático - Teste de Software com Cypress

Este projeto é uma calculadora simples desenvolvida em JavaScript com foco em testes automatizados utilizando Cypress.



## **Como rodar a aplicação**

### 1. Instalar dependências
Certifique-se de que você tem o Node.js instalado. Depois, execute o seguinte comando na raiz do projeto para instalar as dependências:

```bash
npm install
```

### 2. Iniciar o servidor local
Para rodar a aplicação, utilize o `http-server`:

```bash
npx http-server . -p 3000
```

Isso iniciará o servidor local na porta `3000`. Acesse a aplicação no navegador em:

```
http://localhost:3000
```

---

## **Como rodar os casos de teste**

### 1. Instalar o Cypress
Caso o Cypress ainda não esteja instalado, execute o seguinte comando:

```bash
npm install --save-dev cypress
```

### 2. Abrir o Cypress
Para abrir a interface do Cypress e executar os testes, use:

```bash
npx cypress open
```

Na interface do Cypress:
1. Clique no arquivo de teste localizado em `cypress/e2e/calculadora.cy.js`.
2. O Cypress abrirá o navegador e executará os testes automaticamente.

### 3. Executar os testes em modo headless
Se preferir rodar os testes diretamente no terminal (sem interface gráfica), use:

```bash
npx cypress run
```

---

## **Estrutura do Projeto**

- **`src/Calculadora.js`**: Código principal da calculadora.
- **`index.html`**: Interface da calculadora.
- **`cypress/e2e/calculadora.cy.js`**: Arquivo contendo os casos de teste automatizados.
- **`cypress.config.js`**: Configuração do Cypress.

---

## **Casos de Teste**

### Teste de Limpeza de Campos
- **Objetivo:** Garantir que os campos de entrada e o resultado sejam limpos ao clicar no botão "Limpar".
- **Cenário:**
  - **Dado:** O usuário preenche os campos e realiza uma operação.
  - **Quando:** O usuário clica no botão "Limpar".
  - **Então:** Os campos de entrada devem ser resetados e o resultado deve ser removido.

---

## **Dependências**

- **Node.js**
- **http-server**
- **Cypress**

---

## **Comandos úteis**

- **Instalar dependências:** `npm install`
- **Iniciar servidor local:** `npx http-server . -p 3000`
- **Abrir Cypress:** `npx cypress open`
- **Executar testes em modo headless:** `npx cypress run`

---