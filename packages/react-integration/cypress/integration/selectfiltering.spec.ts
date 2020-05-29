describe('Select with Filtering Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#select-demo-filtering-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/select-demo-filtering-nav-link');
  });

  it('Verify Checkbox Select with filtering', () => {
    cy.get('#filter-select').click();
    cy.get('#pf-check-pf-random-id-0').click();
    cy.get('.pf-c-select__toggle')
      .contains('1')
      .should('exist');
  });

  it('Verify filtering works', () => {
    cy.get('.pf-c-form-control').type('run');
    cy.get('#pf-check-pf-random-id-0').should('exist');
    cy.get('#pf-check-pf-random-id-8').should('not.exist');
    cy.get('.pf-c-form-control').type('{backspace}{backspace}{backspace}degr');
    cy.get('#pf-check-pf-random-id-0').should('not.exist');
    cy.get('#pf-check-pf-random-id-8').should('exist');
    cy.get('#pf-check-pf-random-id-8').click();
    cy.get('.pf-c-select__toggle')
      .contains('2')
      .should('exist');
  });
});
