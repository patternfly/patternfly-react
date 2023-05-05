describe('Table Simple Actions Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-simple-actions-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Actions Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v5-c-table').find('tr').should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead').find('th').should('have.length', 5);
  });

  it('Verify dropdown toggle', () => {
    cy.get('td .pf-v5-c-menu-toggle').first().should('exist');
    cy.get('td .pf-v5-c-menu-toggle').first().click();
    cy.get('.pf-v5-c-menu').should('exist');
    cy.get('.pf-v5-c-menu__item').first().click();
  });
});
