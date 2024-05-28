/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq(2) //Pegou o terceiro elemento da lista
        .contains('Apollo Running Short') //Busca pelo nome do produto
        .click()

        cy.get('#tab-title-description > a').should('have.text', 'Descrição')
    });
});