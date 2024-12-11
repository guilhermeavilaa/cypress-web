import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"
import cadastroPage from "../pages/cadastroPage"

//@cadastro

Given("que eu esteja na pagina de cadastro do site serverest", () => {
    cadastroPage.accessCadastro()
  })

When("informar dados validos nos campos Nome, Email e Senha", () => {
    cadastroPage.cadastrarUsuario()
  })

Then("o usuário deve ser cadastrado e autenticado com sucesso na aplicacao", () => {
    cadastroPage.validarCadastro()
})

//@loginValido

Given("que eu esteja na pagina de serverRest", () => {
    loginPage.access()
})

When("informar dados validos de login", () => {
    loginPage.loginValido()
})

Then("serei redirecionado para home page do serverest com sucesso", () => {
    loginPage.validaSucessoLogin()
})

//@loginInvalido

Given("que eu esteja na pagina de serverRest", () => {
    loginPage.access()
})

When("informar dados invalidos de login", () => {
    loginPage.loginInvalido()
})

Then("verei a mensagem de email ou senha invalidos", () => {
    loginPage.validaErroLogin()
})