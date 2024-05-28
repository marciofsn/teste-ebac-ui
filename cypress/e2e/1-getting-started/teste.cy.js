/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('.check() - check a checkbox or radio element', () => {
      // https://on.cypress.io/check
  
      // By default, .check() will check all
      // matching checkbox or radio elements in succession, one after another
      cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
        .check().should('be.checked')
  
      // .check() accepts an array of values
      cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .check(['checkbox1', 'checkbox2']).should('be.checked')
  
      cy.get('.action-checkboxes [type="checkbox"]')
      .not('[disabled]')
      .uncheck()
    })
  })
  