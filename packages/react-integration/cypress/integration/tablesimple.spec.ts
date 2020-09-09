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
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 5);
  });

  it('Verify tooltip info', () => {
    // there should be two header cells with tooltip and popover info respectively
    cy.get('.pf-c-table__column-help-action').should('have.length', 2);
    // tooltip shouldn't exist yet
    cy.get('.pf-c-tooltip').should('not.exist');
    // trigger tooltip
    cy.get('.pf-c-table__column-help-action')
      .first()
      .click();
    cy.get('.pf-c-tooltip').should('exist');
  });

  it('Verify popover info', () => {
    // there should be two header cells with tooltip and popover info respectively
    cy.get('.pf-c-table__column-help-action').should('have.length', 2);
    // popover shouldn't exist yet
    cy.get('.pf-c-popover').should('not.exist');
    // trigger popover
    cy.get('.pf-c-table__column-help-action')
      .eq(1)
      .click();
    cy.get('.pf-c-popover').should('exist');
  });
});
