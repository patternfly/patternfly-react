describe('Badge Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#badge-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/badge-demo-nav-link');
  });

  it('Verify badge is unread', () => {
    cy.get('.pf-c-badge').should('have.class', 'pf-m-unread');
  });

  it('Verify default badge', () => {
    cy.get('.pf-c-badge').contains('7');
  });
});
