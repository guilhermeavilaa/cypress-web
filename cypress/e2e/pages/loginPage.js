import { LOGINELEMENTS } from "../elements/loginElements"
import { HOMEELEMENTS } from "../elements/homeElements"

class login {
    access(){
        cy.visit('/login', { failOnStatusCode: false })
        cy.wait(5000)
    }

    loginValido(){
        cy.get(LOGINELEMENTS.email, {timeout: 2000}).type('teste@gmail.com')
        cy.get(LOGINELEMENTS.senha, {timeout: 2000}).type('teste123')
        cy.get(LOGINELEMENTS.btnEntrar, {timeout: 2000}).click()
    }

    loginInvalido(){
        cy.get(LOGINELEMENTS.email, {timeout: 2000}).type('teste@gmail.com')
        cy.get(LOGINELEMENTS.senha, {timeout: 2000}).type('senhaInvalida')
        cy.get(LOGINELEMENTS.btnEntrar, {timeout: 2000}).click()
    }

    validaSucessoLogin(){
        cy.get(HOMEELEMENTS.btnHome).should('exist')
    }

    validaErroLogin(){
        cy.contains('span', 'Email e/ou senha inválidos').should('be.visible')
    }

}

export default new login()