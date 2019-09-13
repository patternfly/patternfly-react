describe('Table Compact Test', () => {
    it('Navigate to demo section', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#table-compact-demo-nav-item-link').click();
      cy.url().should('eq', 'http://localhost:3000/table-compact-demo-nav-link');
    });

    it('Verify table string', () => {
      cy.get('caption').contains('Compact Table');
    });

    it('Check number of rows', () => {
        cy.get('.pf-c-table').find('tr').should('have.length', 4)
    });

    it('Check number of columns', () => {
        cy.get('thead').find('th').should('have.length', 4)
    });
  
  });
  