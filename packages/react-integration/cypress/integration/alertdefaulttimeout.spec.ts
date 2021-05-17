describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-default-timeout-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-default-timeout-demo-nav-link');
  });

  it('Verify alert timeout', () => {
    cy.get('.pf-c-alert__title').should('not.exist');
    cy.get('#default-button').click();
    cy.get('.pf-c-alert__title').should('exist');
    cy.wait(8000).then(() => {
      cy.get('.pf-c-alert__title').should('not.exist');
    });
  });
});
