Feature: Frontend ServeRest

    Deve realizar as validações de frontend

@cadastro
Scenario: Realizar cadastro de usuário com sucesso
Given que eu esteja na pagina de cadastro do site serverest
When informar dados validos nos campos Nome, Email e Senha
Then o usuário deve ser cadastrado e autenticado com sucesso na aplicacao

@loginValido
Scenario: Realizar um login com sucesso
Given que eu esteja na pagina de serverRest
When informar dados validos de login
Then serei redirecionado para home page do serverest com sucesso

@loginInvalido
Scenario: Validar o login com dados invalidos
Given que eu esteja na pagina de serverRest
When informar dados invalidos de login
Then verei a mensagem de email ou senha invalidos