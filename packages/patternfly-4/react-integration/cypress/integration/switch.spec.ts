describe('Switch Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#switch-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/switch-demo-nav-link');
  });

  it('Verify Switches exist and initial state', () => {
    cy.get('#simple-switch').should('exist');
    cy.get('#simple-switch').should('be.checked');
    cy.get('#disabled-switch-off').should('exist');
    cy.get('#disabled-switch-off').should('not.be.checked');
  });

  it('Verify switch can be toggled', () => {
    cy.get('#simple-switch').click({ force: true });
    cy.get('#simple-switch').should('not.be.checked');
    cy.get('#simple-switch').click({ force: true });
    cy.get('#simple-switch').should('be.checked');
  });

  it('Verify disabled switch can not be toggled', () => {
    cy.get('#disabled-switch-off').should('be.disabled');
    cy.get('#disabled-switch-off').should('not.be.checked');
    cy.get('#disabled-switch-off').click({ force: true });
    cy.get('#disabled-switch-off').should('not.be.checked');
  });
});
