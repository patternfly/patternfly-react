describe('Wizard Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/wizard-demo-nav-link');
  });

  it('Verify wizard in modal launches in a dialog and has a custom width', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-c-wizard').should('exist');
    cy.get('#modalWizId.pf-c-wizard').should('have.attr', 'style', 'width: 710px;');
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

  it('Verify in-page wizard step content is focusable and has role only if content overflows', () => {
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('not.have.attr', 'tabindex');
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').click();
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('not.have.focus');
    cy.get('#inPageWizWithOverflow button.pf-c-wizard__nav-link').last().click();
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('have.attr', 'tabindex');
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('have.attr', 'role').and('eq', 'region');
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').click();
    cy.get('#inPageWizWithOverflow .pf-c-wizard__main').should('have.focus');
  });

  it('Verify modal wizard step content with main element is focusable only if content overflows', () => {
    cy.get('#launchWizOverflow').click();
    cy.get('#inModalWizWithOverflow.pf-c-wizard').should('exist');
    cy.get('#inModalWizWithOverflow .pf-c-wizard__main').should('not.have.attr', 'tabindex');
    cy.get('#inModalWizWithOverflow .pf-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inModalWizWithOverflow .pf-c-wizard__main').click();
    cy.get('#inModalWizWithOverflow .pf-c-wizard__main').should('not.have.focus');
    cy.get('#inModalWizWithOverflow button.pf-c-wizard__nav-link').last().click();
    cy.get('#inModalWizWithOverflow main.pf-c-wizard__main').should('exist');
    cy.get('#inModalWizWithOverflow main.pf-c-wizard__main').should('have.attr', 'tabindex');
    // When WizardBody component is not a div, it should not have a role applied
    cy.get('#inModalWizWithOverflow main.pf-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inModalWizWithOverflow main.pf-c-wizard__main').click();
    cy.get('#inModalWizWithOverflow main.pf-c-wizard__main').should('have.focus');
  });
});
