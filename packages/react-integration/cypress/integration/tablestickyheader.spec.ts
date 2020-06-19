describe('Table Simple Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-sticky-header-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-sticky-header-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Sticky Header Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 21);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 2);
  });

  it('Check for sticky header', () => {
    cy.get('.pf-m-sticky-header').should('exist');
  });
});
