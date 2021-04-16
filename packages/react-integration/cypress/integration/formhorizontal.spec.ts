describe('Form Horizontal Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-horizontal-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-horizontal-demo-nav-link');
  });

  it('Verify form is horizontal content', () => {
    cy.get('form.pf-c-form.pf-m-horizontal').should('exist');
  });

  it('Verify stacked checkboxes', () => {
    cy.get('div.pf-c-form__group-control.pf-m-stack').should('exist');
  });
});
