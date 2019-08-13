describe('Table Simple Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-simple-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-simple-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Simple Table');
  });

  it('Check number of rows', () => {
      cy.get('.pf-c-table').find('tr').should('have.length', 4)
  });

  it('Check number of columns', () => {
      cy.get('thead').find('th').should('have.length', 5)
  });

});
