describe('Table Collapsible Test', () => {
    it('Navigate to demo section', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#table-collapsible-demo-nav-item-link').click();
      cy.url().should('eq', 'http://localhost:3000/table-collapsible-demo-nav-link');
    });
  
    it('Verify table string', () => {
      cy.get('caption').contains('Collapsible table');
    });

    it('Check number of rows', () => {
        cy.get('.pf-c-table').find('tbody').should('have.length', 4)
    });

    it('Check number of columns', () => {
        cy.get('thead').find('th').should('have.length', 5)
    });

    it('Test collapsible', () => {
      cy.get('button#expandable-toggle1').click();
      cy.get('button#expandable-toggle1').click();
      cy.get('button#expandable-toggle3').click();
      cy.get('button#expandable-toggle3').click();
      cy.get('button#expandable-toggle5').click();
      cy.get('button#expandable-toggle5').click();
    })
  });
  