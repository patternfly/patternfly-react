describe('Alert Demo Test', () => {
  it('Verify alert closes when clicked if timeout is set', () => {
    cy.clock();
    cy.visit('http://localhost:3000/alert-timeout-close-button-demo-nav-link');
    cy.get('#alert-custom-timeout').should('not.exist');
    cy.get('#close-button-alert-button').click();
    cy.get('#close-button-alert').should('exist');
    cy.tick(8000);
    cy.get('#close-button-alert').should('exist');
    cy.get('#test-close-button').click();
    cy.get('#close-button-alert').should('not.exist');
  });
});
