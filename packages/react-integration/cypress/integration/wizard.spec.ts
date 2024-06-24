describe('Wizard Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/wizard-demo-nav-link');
  });

  it('Verify in page wizard displays on page render', () => {
    cy.get('#inPageWizId.pf-v6-c-wizard').should('exist');
  });

  it('Verify wizard in modal launches in a dialog and has a custom width', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-v6-c-wizard').should('exist');
    cy.get('#modalWizId.pf-v6-c-wizard').should('have.attr', 'style', 'width: 710px;');
    cy.get('#modalWizId .pf-v6-c-wizard__close > button').click();
  });

  it('Verify wizard in modal sends focus to the new content', () => {
    cy.get('#launchWiz').click();
    cy.get('#modalWizId.pf-v6-c-wizard').should('exist');
    cy.get('#modalWizId .pf-v6-c-wizard__close > button')
      .should('have.focus')
      .then(($closeButton) => {
        cy.wrap($closeButton).click();
      });
  });

  it('Verify in-page wizard step content has role only if content overflows', () => {
    cy.get('#inPageWizWithOverflow .pf-v6-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inPageWizWithOverflow #inPage-overflow-step-2.pf-v6-c-wizard__nav-link').click();
    cy.get('#inPageWizWithOverflow .pf-v6-c-wizard__main').should('have.attr', 'role').and('eq', 'region');
  });

  it('Verify in-page wizard step content receives focus only on next or back click', () => {
    cy.get('#inPageFocusTest .pf-v6-c-wizard__main').should('not.have.focus');
    cy.get('#inPageFocusTest .pf-v6-c-action-list__group button.pf-m-primary').click();
    cy.get('#inPageFocusTest .pf-v6-c-wizard__main').should('have.focus');
    cy.get('#inPageFocusTest #inPageFocusTest-wizard-step-b2').click();
    cy.get('#inPageFocusTest .pf-v6-c-wizard__main').should('not.have.focus');
    cy.get('#inPageFocusTest .pf-v6-c-action-list__group button.pf-m-secondary').click();
    cy.get('#inPageFocusTest .pf-v6-c-wizard__main').should('have.focus');
  });

  it('Verify modal wizard roles are applied correctly', () => {
    cy.get('#launchWizOverflow').click();
    cy.get('#inModalWizWithOverflow .pf-v6-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inModalWizWithOverflow #modal-overflow-step-2.pf-v6-c-wizard__nav-link').click();
    // When WizardBody component is not a div, it should not have a role applied
    cy.get('#inModalWizWithOverflow main.pf-v6-c-wizard__main').should('not.have.attr', 'role');
    cy.get('#inModalWizWithOverflow #modal-overflow-step-3.pf-v6-c-wizard__nav-link').click();
    // When WizardBody component **is** a div, it should have role="region"
    cy.get('#inModalWizWithOverflow div.pf-v6-c-wizard__main').should('have.attr', 'role').and('eq', 'region');
    cy.get('#inModalWizWithOverflow .pf-v6-c-wizard__close > button').click();
  });
});
