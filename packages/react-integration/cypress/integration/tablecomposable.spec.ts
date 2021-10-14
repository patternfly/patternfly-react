describe('Text Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-composable-demo-nav-link');
  });

  it('Verify tooltip entry delay', () => {
    cy.get('#table-text-tooltip').click();
    cy.get('.pf-c-tooltip', { timeout: 1000 }).should('exist');
  });
});
