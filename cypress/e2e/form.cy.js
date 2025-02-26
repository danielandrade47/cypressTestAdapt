import FormPage from "../page-objects/FormPage";

describe("Testes do formulário de contato", () => {
  beforeEach(() => {
    FormPage.acessarPaginaInicial();
  });

  it("Deve enviar o formulário com sucesso", () => {
    FormPage.preencheNome("Daniel Andrade QA");
    FormPage.preencheEmail("email@teste.com");
    FormPage.preencheEmpresa("Empresa Teste");
    FormPage.selecionaProduto("Liviu Drive");
    FormPage.preencheTelefone("51999999999");
    FormPage.preencheMensagem("Mensagem Teste");
    FormPage.enviaFormulario();

    // Valida se a mensagem de sucesso foi exibida
    FormPage.getMensagemSucesso().should("be.visible").and("contain", "Inscrição realizada com sucesso! Em breve nosso time entrará em contato.");
  });
});
