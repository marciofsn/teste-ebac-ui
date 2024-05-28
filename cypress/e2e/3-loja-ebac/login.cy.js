///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('marcio_fsn@hotmail.com')
        cy.get('#password').type('fusiion@96')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('marcio@hotmail.com')
        cy.get('#password').type('fusiion@96')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('marcio_fsn@hotmail.com')
        cy.get('#password').type('fusiion')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail')
        cy.get('.woocommerce-error').should('exist')
    });

    //Massa de dados sendo importada de um arquivo
    it('Deve fazer login com sucesso - Usando massa de dados', () => { 
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
    });

    //Massa de dados sendo utilizada de forma nativa pelo Cypress
    it.only('Deve fazer login com sucesso - Usando Fixture', () => { 
        //Pirmeiro carrega os dados do arquivo (perfil.json) e depois faz as insserções através da função dados
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false}) //Foi utilizado o {log:false} para esconder a senha no log
            cy.get('.woocommerce-form > .button').click()

            cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
        })
    });
});