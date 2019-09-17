describe('Table Headers Wrappable Test', () => {
    it('Navigate to demo section', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#table-headers-wrappable-demo-nav-item-link').click();
      cy.url().should('eq', 'http://localhost:3000/table-headers-wrappable-demo-nav-link');
    });
  
    it('Verify table string', () => {
      cy.get('caption').contains('Table with Wrappable Headers');
    });

    it('Check number of rows', () => {
        cy.get('.pf-c-table').find('tr').should('have.length', 2)
    });

    it('Check number of columns', () => {
        cy.get('thead').find('th').should('have.length', 5)
    });
  });
  