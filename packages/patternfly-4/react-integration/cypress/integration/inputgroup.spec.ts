describe('Input Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#input-group-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/input-group-demo-nav-link');
  });
})