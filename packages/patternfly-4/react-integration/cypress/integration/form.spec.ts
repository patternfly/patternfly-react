describe('Form Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-demo-nav-link');
  });

  it('Verify default value content', () => {
    cy.get('input').should('have.value', 'Five');
  });

  it('Verify form error', () => {
    cy.get('.pf-m-error').contains('Age has to be a number'); 
  }); 

})