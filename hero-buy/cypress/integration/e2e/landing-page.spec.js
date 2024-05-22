// landing-page.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Landing Page', () => {
    it('should display the landing page with products', () => {
      cy.visit('http://localhost:61573/');
      cy.contains('Welcome to E-Shop!');
      cy.get('.card').should('have.length', 3);
      cy.contains('Add to Cart').click();
    });
  });
  