describe('Alert Demo Test', () => {
  it('Verify alert timeout', () => {
    cy.clock();
    cy.visit('http://localhost:3000/alert-custom-timeout-demo-nav-link');
    cy.get('#alert-custom-timeout').should('not.exist');
    cy.get('#custom-button').click();
    cy.get('#alert-custom-timeout').should('exist');
    cy.tick(16000);
    cy.get('#alert-custom-timeout').should('not.exist');
    cy.on('window:alert', msg => expect(msg).to.contains('Timeout'));
  });
});
