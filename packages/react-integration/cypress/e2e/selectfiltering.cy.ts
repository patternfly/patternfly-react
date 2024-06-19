function checkFiltering() {
  cy.get('.pf-v5-c-form-control').type('run');
  cy.get('#Running').should('exist');
  cy.get('#Hewlett-Packard').should('not.exist');
  cy.get('.pf-v5-c-form-control').type('{backspace}{backspace}{backspace}degr');
  cy.get('#Running').should('not.exist');
  cy.get('#Degraded').should('exist');
  cy.get('#Degraded').click();
  cy.get('#filter-select').click();
}

describe('Select with Filtering Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-demo-filtering-nav-link');
  });

  it('Verify Checkbox Select with filtering chips', () => {
    cy.get('#filter-select').click();
    cy.get('#Running').click();
    cy.get('.pf-v5-c-select__toggle').contains('1').should('exist');
  });
  it('Verify Checkbox Select with filtering works', () => {
    checkFiltering();
    cy.get('.pf-v5-c-select__toggle').contains('2').should('exist');
  });

  it('Verify Single Select with filtering works', () => {
    cy.get('#single-toggle').click();
    cy.get('#filter-select').click();
    checkFiltering();
  });
});
