describe('Form Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-demo-nav-link');
  });

  it('Verify default value content', () => {
    cy.get('input')
      .first()
      .should('have.value', 'Five');
  });

  it('Verify form allows correct input', () => {
    cy.get('input')
      .first()
      .clear()
      .type('5');
    cy.get('.pf-c-form__helper-text').contains('Please write your age');
  });

  it('Verify form identifies input error', () => {
    cy.get('input')
      .first()
      .clear()
      .type('Something');
    cy.get('.pf-c-form__helper-text').contains('Age has to be a number');
  });
});
