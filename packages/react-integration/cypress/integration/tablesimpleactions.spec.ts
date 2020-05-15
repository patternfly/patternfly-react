describe('Table Simple Actions Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-simple-actions-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-simple-actions-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Actions Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 5);
  });

  it('Verify dropdown toggle', () => {
    cy.get('td .pf-c-dropdown__toggle')
      .first()
      .should('exist');
    cy.get('td .pf-c-dropdown__toggle')
      .first()
      .click();
    cy.get('.pf-c-dropdown__menu').should('exist');
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .click();
  });
});
