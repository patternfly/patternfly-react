describe('Skip to Content Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#skip-to-content-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/skip-to-content-demo-nav-link');
  });
  it('Should have skip to content component', () => {
    cy.get('.pf-c-skip-to-content').should('have.attr', 'href', '#ts-demo-app-page-id');
  });
});
