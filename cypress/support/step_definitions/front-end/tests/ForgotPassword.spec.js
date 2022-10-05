/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const payloadLogin = require('../payloads/login.json')

beforeEach (() => {
   cy.visit(payloadLogin.url)
});

When("clicar no link “esqueci minha senha”", () => {
    cy.contains('span[class="mat-button-wrapper"]', 'Esqueci minha senha').click()
}) 

When("informar e-mail válido", () => {
    cy.get('#mat-input-2').clear().type(payloadLogin.email)
}) 

When("exibir mensagem “Um link para atualizar sua senha foi enviado para seu e-mail”", () => {
    const title = "Enviamos um link para seu email!"

    cy.contains('#mat-dialog-0 > app-alert > section', title)
    cy.contains('span[class="mat-button-wrapper"]', 'Ok').click()
}) 

When("não informar e-mail", () => {
    cy.get('#mat-input-2').clear()
}) 

When("destacar o campo e-mail do esqueceu senha", () => {
    cy.get('#mat-input-2')
    .should('have.css', 'caret-color')
    .and('be.colored', '#ff5722')
}) 

When("exibir no campo “E-mail obrigatório” do esqueceu senha", () => {
    const title = " Email obrigatório"

    cy.get('#mat-error-1').then((value) => { 
        expect(value.text()).to.eq(title)
    })
}) 

When("informar e-mail não cadastrado", () => {
    cy.get('#mat-input-2').clear().type(payloadLogin.emailInexistente)
}) 

When("exibir mensagem “Ops! Você não tem um cadastro”", () => {
    const title = "Você ainda não tem um cadastro conosco."
    const error = "error_outline"
    const close = "close"

    cy.get('div[class="toast-container ng-star-inserted"]').then((value) => {
        const message = value.text().replace(error, '').replace(close, '');
        expect(message).to.eq(title)
    })
})

When("informar e-mail inválido do esqueceu senha", () => {
    cy.get('#mat-input-2').clear().type(payloadLogin.emailInvalido)
}) 

When("exibir no campo “E-mail inválido” do esqueceu senha", () => {
    const title = " Email inválido"

    cy.get('#mat-error-2').then((value) => { 
        expect(value.text()).to.eq(title)
    })
}) 