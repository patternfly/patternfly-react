describe('Wizard Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/wizard-demo-nav-link');
  });

  it('Verify wizard in modal launches in a dialog and has a custom width', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-c-wizard').should('exist');
    cy.get('.pf-c-modal-box').should('have.attr', 'style', 'width: 710px;');
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

  it('Verify wizard step content is focusable only if content overflows', () => {
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').should('not.have.attr', 'tabindex');
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').click();
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').should('not.have.focus');
    cy.get('#wizard-focusable-overflow button.pf-c-wizard__nav-link')
      .last()
      .click();
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').should('have.attr', 'tabindex');
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').click();
    cy.get('#wizard-focusable-overflow .pf-c-wizard__main').should('have.focus');
  });

  it('Verify role attribute is applied correctly', () => {
    cy.get('#wizard-correct-role .pf-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#wizard-correct-role button.pf-c-wizard__nav-link')
      .last()
      .click();
    cy.get('#wizard-correct-role .pf-c-wizard__main').should('have.attr', 'role');
    cy.get('#wizard-correct-role .pf-c-wizard__main button').click();
    // Within a modal, wizard body uses the <main> element and should not have a role applied
    cy.get('#wizard-correct-role .pf-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#wizard-correct-role .pf-c-wizard__close').click();
  });
});
