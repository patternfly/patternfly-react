describe('Hint Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/hint-demo-nav-link');
  });

  it('Verify banner', () => {
    cy.get('.pf-c-hint').should('exist');
    cy.get('.pf-c-hint__title').should('exist');
  });
});
