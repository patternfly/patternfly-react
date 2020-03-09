describe('Backdrop Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#backdrop-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/backdrop-demo-nav-link');
  });

  it('Verify has correct className', () => {
    cy.get('.backdrop').should('have.class', 'pf-c-backdrop');
  });
});
