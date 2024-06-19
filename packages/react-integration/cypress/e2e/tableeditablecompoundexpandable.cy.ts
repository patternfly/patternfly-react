describe('Table Compound Expandable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-editable-compound-expandable-demo-nav-link');
  });

  it('Test expandable/collapsible', () => {
    cy.get('button.pf-v5-c-table__button').first().click();

    cy.get('button.pf-v5-c-table__button').first().click();

    // should not have changed the url
    cy.url().should('eq', 'http://localhost:3000/table-editable-compound-expandable-demo-nav-link');
  });
});
