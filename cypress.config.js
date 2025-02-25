const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // 🔹 Garante que os testes estejam na pasta e2e
    baseUrl: "https://adaptliviu.com.br" // 🔹 Define a URL base do projeto
  }
});
