describe('Action List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#action-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/action-list-demo-nav-link');
  });

  it('Icon action list should have modifier', () => {
    cy.get('#icon-action-list').should('have.class', 'pf-m-icons');
  });
});
