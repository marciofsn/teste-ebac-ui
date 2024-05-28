/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar o cadastro com sucesso ', () => {
        //Registro de novo usuário
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')

        //Completar cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
        let primeiroNome = faker.person.firstName()
        let email = faker.internet.email(primeiroNome) // Ele criou um email com base no primeiro nome
        let ultimoNome = faker.person.lastName()
        
        //Registro de novo usuário
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')

        //Completar cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
