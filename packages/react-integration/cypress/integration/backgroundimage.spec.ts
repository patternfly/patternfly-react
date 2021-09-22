describe('Background Image Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/backgroundimage-demo-nav-link');
  });

  it('Verify filter has correct class', () => {
    cy.get('svg').should('have.class', 'pf-c-background-image__filter');
  });
});
