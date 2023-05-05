describe('Table Sortable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-sortable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Sortable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v5-c-table').find('tr').should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead').find('th').should('have.length', 5);
  });

  it('Test sortable transformer', () => {
    cy.get('.pf-v5-c-table__sort').should('exist');
    cy.get('.pf-v5-c-table__sort').first().click();
    cy.get('td').first().contains('a');
    cy.get('.pf-v5-c-table__sort').first().click();
    cy.get('.pf-v5-c-table__sort').last().click();
    cy.get('td').eq(2).contains('a');
  });
});
