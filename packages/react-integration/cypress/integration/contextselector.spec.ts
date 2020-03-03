describe('Context Selector Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#context-selector-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/context-selector-demo-nav-link');
  });

  it('Verify toggle class', () => {
    cy.get('#pf-context-selector-toggle-id-0').should('have.class', 'pf-c-context-selector__toggle');
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
