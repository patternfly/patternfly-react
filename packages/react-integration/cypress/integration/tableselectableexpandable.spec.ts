describe('Table Selectable Expandable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-selectable-expandable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-selectable-expandable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Selectable expandable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 5);
  });

  it('Checks that initially checked inputs carry checked property', () => {
    cy.get('.pf-c-table')
      .find('[name="checkrow0"]')
      .should('have.prop', 'checked');
  });

  it('Checks that check all checkbox is indeterminate', () => {
    cy.get('.pf-c-table')
      .find('[name="check-all"]')
      .should('have.prop', 'indeterminate', true);
  });
});
