describe('Form Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-field-group-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-field-group-demo-nav-link');
  });

  it('Verify first field group is expanded by default', () => {
    cy.get('#fieldgroup1').should('exist');
    cy.get('#fieldgroup1 > .pf-c-form__field-group-body').should('exist');
    cy.get('#form-field-group-toggle0').click();
    cy.get('#fieldgroup1 > .pf-c-form__field-group-body').should('not.exist');
    cy.get('#form-field-group-toggle0').click();
    cy.get('#fieldgroup1 > .pf-c-form__field-group-body').should('exist');
  });

  it('Verify non expandable field group is expanded by default', () => {
    cy.get('#fieldgroup2').should('exist');
    cy.get('#fieldgroup2 > .pf-c-form__field-group-body').should('exist');
  });

  it('Verify 3rd field group is not expanded by default', () => {
    cy.get('#fieldgroup3').should('exist');
    cy.get('#fieldgroup3 > .pf-c-form__field-group-body').should('not.exist');
    cy.get('#form-field-group-toggle1').click();
    cy.get('#fieldgroup3 > .pf-c-form__field-group-body').should('exist');
    cy.get('#form-field-group-toggle1').click();
    cy.get('#fieldgroup3 > .pf-c-form__field-group-body').should('not.exist');
  });
});
