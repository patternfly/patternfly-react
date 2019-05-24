describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-demo-nav-link');
  });
 
  it('Verify info alert', () => {
    cy.get('.pf-c-alert').should('have.class', 'pf-m-info');
  });

  it('Verify alert closes', () => {
    cy.get('#test-button').click();
    cy.get('.pf-c-alert').should('not.exist');
  });
});
