describe('Alert Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-group-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-group-demo-nav-link');
  });
});