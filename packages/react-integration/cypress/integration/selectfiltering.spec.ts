describe('Select with Filtering Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#select-demo-filtering-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/select-demo-filtering-nav-link');
  });

  it('Verify Checkbox Select with filtering', () => {
    cy.get('#filter-select').click();
    cy.get('#Running').click();
    cy.get('.pf-c-select__toggle')
      .contains('1')
      .should('exist');
  });

  it('Verify filtering works', () => {
    cy.get('.pf-c-form-control').type('run');
    cy.get('#Running').should('exist');
    cy.get('#Degraded').should('not.exist');
    cy.get('.pf-c-form-control').type('{backspace}{backspace}{backspace}degr');
    cy.get('#Running').should('not.exist');
    cy.get('#Degraded').should('exist');
    cy.get('#Degraded').click();
    cy.get('.pf-c-select__toggle')
      .contains('2')
      .should('exist');
  });
});
