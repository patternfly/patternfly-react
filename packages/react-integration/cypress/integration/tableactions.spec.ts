describe('Table Actions Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-actions-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-actions-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Actions Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 5);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 5);
  });
});
