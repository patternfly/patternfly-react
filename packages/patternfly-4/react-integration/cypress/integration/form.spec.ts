describe('Form Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-demo-nav-link');
  });
})