describe('Jump Link Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#jump-links-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/jump-links-demo-nav-link');
  });
});
