/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Vera', 'Lucia', 'vera_qa')

        cy.get('.woocommerce-message').should('be.visible')
        cy.get('.woocommerce-message').should('have.text', '\n\t\tDetalhes da conta modificados com sucesso.\t')
    });
});