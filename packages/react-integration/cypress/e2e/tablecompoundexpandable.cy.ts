describe('Table Compound Expandable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-compound-expandable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Compound expandable table');
  });

  it('Test expandable/collapsible', () => {
    cy.get('button.pf-v5-c-table__button').first().click();
    cy.get('button.pf-v5-c-table__button').eq(1).click();
    cy.get('button.pf-v5-c-table__button').eq(2).click();
    cy.get('button.pf-v5-c-table__button').first().click();
    cy.get('button.pf-v5-c-table__button').eq(3).click();
    cy.get('button.pf-v5-c-table__button').eq(3).click();
    cy.get('button.pf-v5-c-table__button').eq(4).click();
    cy.get('button.pf-v5-c-table__button').eq(4).click();
  });
});
