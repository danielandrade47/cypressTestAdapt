class FormPage {
    acessarPaginaInicial() {
      cy.visit("https://adaptliviu.com.br"); // Acessa a página inicial
    }

    scrollToForm() {
        cy.get('#form-field-name').scrollIntoView(); // Scroll até o campo 'Nome' (para caso o Cypress não localize o elemento do formulario)
      }

    //Abaixo o cypress faz o mapeamento dos campos do formulário para digitar os dados corretamente
    preencheNome(name) {
      cy.get('#form-field-name').type(name);
    }
  
    preencheEmail(email) {
      cy.get('#form-field-email').type(email);
    }

    selecionaProduto(produto) {
      cy.get('#form-field-field_f4f7f90').select(produto);

    }

    preencheEmpresa(empresa) {
      cy.get('#form-field-message').type(empresa);
  }

    preencheTelefone(telefone) {
        cy.get('#form-field-field_195975d').type(telefone);
    }
  
    preencheMensagem(message) {
      cy.get('#form-field-field_98bbe7d').type(message);
    }

    marcaCheckbox(checkbox) {
      cy.get('#form-field-field_757d493').check();
    }
  
    enviaFormulario() {
      cy.get('button[type="submit"]').click();
    }
  
    getMensagemSucesso() {
      return cy.get('.elementor-message.elementor-message-success'); //Obtém a mensagem de sucesso
    }
  }
  
  export default new FormPage();
  