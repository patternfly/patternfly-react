describe('Table Collapsible Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-collapsible-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Collapsible table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v5-c-table').find('tbody').should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead').find('th').should('have.length', 6);
  });

  it('Test collapsible', () => {
    cy.get('button#expandable-toggle1').click();
    cy.get('button#expandable-toggle1').click();
    cy.get('button#expandable-toggle3').click();
    cy.get('button#expandable-toggle3').click();
    cy.get('button#expandable-toggle5').click();
    cy.get('button#expandable-toggle5').click();
  });
});
