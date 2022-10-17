/// <reference types="cypress" />

describe('Acessar a Login Page e Validar a Existência de componentes e suas funcionalidades', () => {
  beforeEach('Acesse a Login Page', () => {
   cy.visit('/login')
  })

  it('WEB | Validar as Existências dos Itens como: Texto, Botões, Inputs e Imagens', () => {
      //Validar Logo na Login Page
      cy.get('.brand').should('be.visible')
      cy.get('.brand').invoke('attr', 'src="assets/images/brands/brand-ltf-1.svg"')
      
      //Validar Google Login
      cy.get('.login-container-card-social > .mat-focus-indicator').should('be.visible')
      cy.get('.login-container-card-social > .mat-focus-indicator').invoke('attr', 'src="assets/images/brands/google-favicon.svg"')
      cy.get('.login-container-card-social > .mat-focus-indicator').should('have.text', 'Usar uma conta Google')
      
      //Validar Separation Bar
      cy.get('.separation-bar').should('be.visible')
      cy.get('.separation-bar > span').should('have.text', 'ou')

      //Validar Label E-mail
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')
      
      //Validar Input E-mail
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text', 'Email *')

      //Validar Label Senha
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')

      //Validar Input Senha
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('have.text', 'Senha *')
    
      
      //Validar Botão Exibir/Ocultar a Senha    
      cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('be.visible')
      cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
      cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('be.visible')

      //Validar Botão Continuar
      cy.get('.mat-flat-button').should('be.visible')
      cy.get('.mat-flat-button').should('have.text', ' Continuar ')

      //Validar label Esqueci minha senha
      cy.get('.login-container-card-footer > .mat-focus-indicator > .mat-button-wrapper').should('be.visible')
      cy.get('.login-container-card-footer > .mat-focus-indicator > .mat-button-wrapper').should('have.text', ' Esqueci minha senha keyboard_arrow_right')      
  });
})