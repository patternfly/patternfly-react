describe('Empty State Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#empty-state-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/empty-state-demo-nav-link');
  });

  it('Verify large empty state', () => {
    cy.get('.pf-c-empty-state').contains('Large Empty State');
  });

  it('Verify full empty state', () => {
    cy.get('.pf-c-empty-state').contains('Full Empty State');
  });

  it('Verify small empty state', () => {
    cy.get('.pf-c-empty-state').contains('Small Empty State');
  });
})
