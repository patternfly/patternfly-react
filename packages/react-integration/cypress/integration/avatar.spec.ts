describe('Avatar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#avatar-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/avatar-demo-nav-link');
  });

  it('Verify avatar is dark', () => {
    cy.get('.pf-c-avatar').should('have.class', 'pf-m-dark');
  });
});
