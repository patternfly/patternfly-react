describe('Table Compound Expandable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-editable-compound-expandable-demo-nav-link');
  });

  it('Test expandable/collapsible', () => {
    cy.get('#expandable-toggle-0-1').first().click();

    cy.get('#expandable-toggle-0-1').first().click();

    // should not have changed the url
    cy.url().should('eq', 'http://localhost:3000/table-editable-compound-expandable-demo-nav-link');
  });
});
