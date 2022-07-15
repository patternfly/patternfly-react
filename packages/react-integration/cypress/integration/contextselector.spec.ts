describe('Context Selector Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/context-selector-demo-nav-link');
  });

  it('Verify toggle button works', () => {
    cy.get('.pf-c-context-selector__toggle').click();
    cy.get('.pf-c-context-selector__menu').should('exist');
  });

  it('Verify toggle text changes with selection', () => {
    cy.get('.pf-c-context-selector__menu-list-item')
      .last()
      .click();
    cy.get('.pf-c-context-selector__toggle-text').contains('Azure 2');
  });
});
