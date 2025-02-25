# Script de Automação com Cypress

Este repositório contém testes automatizados para a página [Adapt Liviu](https://adaptliviu.com.br) utilizando **Cypress** e o padrão **Page Objects**.


## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end;
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript;
- O Padrão de design escolhido para estruturar o projeto foi o Page Object Model (POM).

## Configurar o ambiente:
É necessário instalar os seguintes programas:
- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (ou outro editor)

## Passos para Executar os testes:
1.  Clonar o repositório através do Git:
  git clone https://github.com/danielandrade47/cypressTestAdapt  
  cd cypressTestAdapt

2. Instalar as dependências do projeto:
   npm install

3. Executar os testes no Modo Interativo do Cypress:
   npx cypress open  
  (Este comando vai abrir a interface gráfica do Cypress. Uma vez aberto, basta selecionar o teste e rodá-lo).

4. Executar os testes no modo Headless do Cypress
   npx cypress run  
  (Este comando vai executar os testes do Cypress diretamente no terminal, sem a necessidade de uma Interface Gráfica).
