describe('Table Compound Expandable Test', () => {
    it('Navigate to demo section', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#table-compound-expandable-demo-nav-item-link').click();
      cy.url().should('eq', 'http://localhost:3000/table-compound-expandable-demo-nav-link');
    });
  
  });
  