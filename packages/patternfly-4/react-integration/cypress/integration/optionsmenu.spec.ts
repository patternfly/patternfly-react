describe('Login Page Demo Test', () => {
  it('Navigate to OptionsMenu section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#options-menu-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/options-menu-demo-nav-item-link')
  });
});
