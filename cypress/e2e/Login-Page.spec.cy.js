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

    it('WEB | Validar a funcionalidade do botão exibir/ocultar a senha', () => {
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('be.visible')
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').type('asdasda')
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('be.visible')
        });

    context('WEB | Credenciais válidas, inválidas e falsas', () => {
  
      it('WEB | Deve retornar um alert ao passar informações em branco', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('#mat-error-0').should('be.visible')
        cy.get('#mat-error-0').should('have.text', ' Email obrigatório')
      });

      it('WEB | Deve retornar um alert ao passar credenciais invalidas "email"', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_invalidas').email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').password)
        cy.get('#mat-error-1').should('be.visible')
        cy.get('#mat-error-1').should('have.text', ' Email inválido')     
      });
  
      it('WEB | Deve retornar um alert ao passar credenciais invalidas "password"', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_invalidas').password)
    });
      
      it('WEB | Deve retornar um alert ao passar credenciais falsas "email"', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_falsas').email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').password)
        cy.get('.mat-flat-button').click()
        cy.get('.toast-container').should('be.visible')
        cy.get('.toast-container').should('have.text', 'error_outlineUsuário ou senha inválidosclose')
      });
  
      it('WEB | Deve retornar um alert ao passar credenciais falsas "password"', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_falsas').password)
        cy.get('.mat-flat-button').click()
        cy.get('.toast-container').should('be.visible')
        cy.get('.toast-container').should('have.text', 'error_outlineUsuário ou senha inválidosclose')
      });
      
      it('WEB | Deve acessar a plataforma ao passar credenciais válidas "email e senha"', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('credenciais_validas').password)
        cy.get('.mat-flat-button').click()
        cy.url().should('include', 'https://hml-app.learntofly.global/pages/home')
      });  

      it('WEB | Deve acessar a página de recuperação de senha"', () => {
        cy.get('.login-container-card-footer > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.url().should('include', 'https://hml-app.learntofly.global/login')
        cy.get('.login-container-card-social > .mat-focus-indicator').should('be.visible')
        cy.get('.mat-form-field-infix').should('be.visible')
      });
    })
})