/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.server()
    cy.route('GET', `https://fillmurray.com/*`, 'fixture:image.jpg')
    
    cy.visit('https://unikitty37.github.io/cypress-test-tiny/')
  })
  
  it('renders page 2', () => {
    cy.server()
    cy.route('GET', '**/page2.html', 'SAUSAGE')
    
    cy.visit('https://unikitty37.github.io/cypress-test-tiny/')
    cy.get('a')
      .click()
  })
})
