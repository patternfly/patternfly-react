describe('Text Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-composable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-composable-demo-nav-link');
  });

  it('Verify tooltip entry delay', () => {
    cy.get('#table-text-tooltip').click();
    // Check that tooltip isn't immediately visible
    cy.get('.pf-c-tooltip', { timeout: 200 }).should('not.exist');
    cy.get('.pf-c-tooltip', { timeout: 1000 }).should('exist');
  });
});
