describe('Brand Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/brand-demo-nav-link');
  });

  it('Verify has src', () => {
    cy.get('img').should('have.attr', 'src');
  });

  it('Verify default alt', () => {
    cy.get('img').should('have.attr', 'alt', 'Patternfly Logo');
  });
});
