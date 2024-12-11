import { CADASTROELEMENTS } from "../elements/cadastroElements"
import { LOGINELEMENTS } from "../elements/loginElements"
import { HOMEELEMENTS } from "../elements/homeElements"
import { gerarMassa } from "../../support/utills"

class cadastro {
    accessCadastro(){
        cy.visit('/login', { failOnStatusCode: false })
        cy.wait(5000)
        cy.get(LOGINELEMENTS.cadastroUser).click()
    }

    cadastrarUsuario(){
        const email = gerarMassa()
        cy.get(CADASTROELEMENTS.nome, {timeout: 2000}).type('QA Teste')
        cy.get(CADASTROELEMENTS.email, {timeout: 2000}).type(email)
        cy.get(CADASTROELEMENTS.senha, {timeout: 2000}).type('teste123')
        cy.get(CADASTROELEMENTS.checkboxAdmin, {timeout: 2000}).click()
        cy.get(CADASTROELEMENTS.btnCadastrar, {timeout: 2000}).click()
    }

    validarCadastro(){
        cy.get(HOMEELEMENTS.btnHome, {timeout: 20000}).should('exist')
    }
    
}

export default new cadastro()