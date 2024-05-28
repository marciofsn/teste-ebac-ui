///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('marcio_fsn@hotmail.com')
        cy.get('#password').type('fusiion@96')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
    });
});