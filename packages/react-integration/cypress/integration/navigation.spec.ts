describe('Navigation', () => {
  it('Verify the app starts up', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
