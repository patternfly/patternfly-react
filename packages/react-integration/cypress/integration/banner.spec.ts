describe('Banner Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/banner-demo-nav-link');
  });

  it('Verify banner', () => {
    cy.get('.pf-c-banner').should('exist');
    cy.get('.pf-c-banner').should('have.class', 'pf-m-sticky');
  });
});
