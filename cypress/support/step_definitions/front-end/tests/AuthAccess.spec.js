/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const payloadLogin = require('../payloads/login.json')
var chaiColors = require('chai-colors');    
chai.use(chaiColors);

beforeEach (() => {
   cy.visit(payloadLogin.url)
});

When("informar e-mail e senha válidos", () => {
   cy.get('#mat-input-0').clear().type(payloadLogin.email)
   cy.get('#mat-input-1').clear().type(payloadLogin.senha)
}) 

When("clicar no botão “Continuar”", () => {
    cy.contains('span[class="mat-button-wrapper"]', 'Continuar').click()
}) 

When("realizar login no sistema", () => {
    const title = "Oi, QA :)"

    cy.contains('span[class="wellcome-name"]', title)
}) 

When("não informar o e-mail e informar senha", () => {
    cy.get('#mat-input-0').clear()
    cy.get('#mat-input-1').clear().type(payloadLogin.senha)
}) 

When("destacar o campo e-mail", () => {
    cy.get('#mat-input-0')
    .should('have.css', 'caret-color')
    .and('be.colored', '#ff5722')
}) 

When("exibir no campo “E-mail obrigatório”", () => {
    const title = " Email obrigatório"

    cy.get('#mat-error-0').then((value) => { 
        expect(value.text()).to.eq(title)
    })
}) 

When("informar o e-mail e não informar senha", () => {
    cy.get('#mat-input-0').clear().type(payloadLogin.email)
    cy.get('#mat-input-1').clear()
}) 

When("destacar o campo senha", () => {
    cy.get('#mat-input-1')
    .should('have.css', 'caret-color')
    .and('be.colored', '#ff5722')
}) 

When("não informar o e-mail e não informar senha", () => {
    cy.get('#mat-input-0').clear()
    cy.get('#mat-input-1').clear()
}) 

When("informar e-mail e senha inválidos", () => {
    cy.get('#mat-input-0').clear().type(payloadLogin.emailInvalido)
    cy.get('#mat-input-1').clear().type(payloadLogin.senhaInvalida)
}) 

When("exibir no campo “E-mail inválido”", () => {
    const title = " Email inválido"

    cy.get('#mat-error-1').then((value) => { 
        expect(value.text()).to.eq(title)
    })
}) 

When("informar e-mail inválido e senha", () => {
    cy.get('#mat-input-0').clear().type(payloadLogin.emailInvalido)
    cy.get('#mat-input-1').clear().type(payloadLogin.senha)
})

When("informar e-mail válido e senha inválida", () => {
    cy.get('#mat-input-0').clear().type(payloadLogin.email)
    cy.get('#mat-input-1').clear().type(payloadLogin.senhaInvalida)
})

When("informar e-mail não cadastrado e senha", () => {
    cy.get('#mat-input-0').clear().type(payloadLogin.emailInexistente)
    cy.get('#mat-input-1').clear().type(payloadLogin.senha)
})

When("exibir mensagem “Usuário ou senha inválidos”", () => {
    const title = "Usuário ou senha inválidos"
    const error = "error_outline"
    const close = "close"

    cy.get('div[class="toast-container ng-star-inserted"]').then((value) => {
        const message = value.text().replace(error, '').replace(close, '');
        expect(message).to.eq(title)
    })
})

When("informo uma senha", () => {
    cy.get('#mat-input-1').clear().type(payloadLogin.senha)
}) 

When("clico no ícone “olho”", () => {
    cy.contains('span[class="mat-button-wrapper"]', 'visibility').click()
}) 

When("exibir a senha", () => {
    cy.get("[type='text']").should('have.value', payloadLogin.senha)
})

When("o ícone “olho” passa a ser o ícone “olho com traço”", () => {
    const title = "visibility_off "

    cy.get('div[class="mat-form-field-suffix ng-tns-c4-1 ng-star-inserted"]').then((value) => {
        expect(value.text()).to.eq(title)
    })
}) 

When("o ícone “olho” passa a ser o ícone “olho com traço”", () => {
    const title = "visibility_off "

    cy.get('div[class="mat-form-field-suffix ng-tns-c4-1 ng-star-inserted"]').then((value) => {
        expect(value.text()).to.eq(title)
    })
}) 

When("clico no ícone “olho com traço”", () => {
    cy.contains('span[class="mat-button-wrapper"]', 'visibility_off').click()
})

When("esconder a senha", () => {
    cy.get("[type='password']").should('have.value', payloadLogin.senha)
})

When("o ícone “olho com traço” passa a ser o ícone “olho”", () => {
    const title = "visibility "

    cy.get('div[class="mat-form-field-suffix ng-tns-c4-1 ng-star-inserted"]').then((value) => {
        expect(value.text()).to.eq(title)
    })
}) 
