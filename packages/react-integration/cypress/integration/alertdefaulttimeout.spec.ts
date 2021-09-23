describe('Alert Demo Test', () => {
  it('Verify alert timeout', () => {
    cy.clock();
    cy.visit('http://localhost:3000/alert-default-timeout-demo-nav-link');
    cy.get('#alert-default-timeout').should('not.exist');
    cy.get('#default-button').click();
    cy.get('#alert-default-timeout').should('exist');
    cy.tick(8000);
    cy.get('#alert-default-timeout').should('not.exist');
  });
});
