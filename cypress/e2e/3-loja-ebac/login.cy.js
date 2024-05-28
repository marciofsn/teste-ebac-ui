///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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
});