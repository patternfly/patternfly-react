describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-timeout-close-button-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-timeout-close-button-demo-nav-link');
  });

  it('Verify alert closes when clicked if timeout is set', () => {
    cy.get('#alert-custom-timeout').should('not.exist');
    cy.get('#close-button-alert-button').click();
    cy.get('#close-button-alert').should('exist');
    cy.wait(8000).then(() => {
      cy.get('#close-button-alert').should('exist');
      cy.get('#test-close-button').click();
      cy.get('#close-button-alert').should('not.exist');
    });
  });
});
