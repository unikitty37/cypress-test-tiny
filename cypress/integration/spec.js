/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.server()
    cy.route('GET', `https://fillmurray.com/*`, 'fixture:image.jpg')
    
    cy.visit('https://unikitty37.github.io/cypress-test-tiny/')
  })
})
