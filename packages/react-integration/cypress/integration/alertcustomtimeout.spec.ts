describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-custom-timeout-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-custom-timeout-demo-nav-link');
  });

  it('Verify alert timeout', () => {
    cy.get('#alert-custom-timeout').should('not.exist');
    cy.get('#custom-button').click();
    cy.get('#alert-custom-timeout').should('exist');
    cy.wait(16000).then(() => {
      cy.get('#alert-custom-timeout').should('not.exist');
    });
  });
});
