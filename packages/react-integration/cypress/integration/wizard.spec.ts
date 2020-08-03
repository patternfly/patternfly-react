describe('Wizard Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#wizard-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/wizard-demo-nav-link');
  });

  it('Verify wizard in modal launches in a dialog', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-c-wizard').should('exist');
    cy.focused().click();
  });

  it('Verify wizard in modal sends focus to the new content', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-c-wizard').should('exist');
    cy.focused().should('have.class', 'pf-c-wizard__close');
    cy.focused().click();
  });

  it('Verify in page wizard displays on page render', () => {
    cy.get('#inPageWizId.pf-c-wizard').should('exist');
  });
});
