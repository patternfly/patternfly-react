describe('Form Select Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-select-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-select-demo-nav-link');
  });

  it('Verify default value content', () => {
    cy.get('select').should('have.value', '2');
  });

  it('Verify form allows correct selection', () => {
    cy.get('select')
      .select('3')
      .should('have.value', '3');
  });

  it('Verify disabled select', () => {
    cy.get('.pf-c-form-control')
      .find('optgroup[label="Group3"]')
      .should('be.disabled');
  });
});
