describe('Login Page Demo Test', () => {
  it('Navigate to OptionsMenu section', () => {
    cy.visit('http://localhost:3000/options-menu-demo-nav-link');
  });

  it('Verify initial state', () => {
    cy.get('#options-menu-single-option-example')
      .find('.pf-c-options-menu__toggle-text')
      .then(toggleText => expect(toggleText.text()).to.equal('Options menu'));
    cy.get('#options-menu-single-option-example')
      .find('.pf-c-options-menu__toggle-icon')
      .should('exist');
    cy.get('#options-menu-single-option-example.pf-m-expanded').should('not.exist');

    cy.get('#options-menu-modified-example.pf-m-top.pf-m-align-right').should('exist');
    cy.get('#options-menu-modified-example')
      .find('.pf-c-options-menu__toggle.pf-m-text.pf-m-plain')
      .should('exist');
    cy.get('#options-menu-modified-example')
      .find('.pf-c-options-menu__toggle-text')
      .then(toggleText => expect(toggleText.text()).to.equal('Custom text'));
    cy.get('#options-menu-modified-example.pf-m-expanded').should('not.exist');
  });

  it('Verify event handlers fire correctly', () => {
    cy.get('#options-menu-single-option-example')
      .find('.pf-c-options-menu__toggle')
      .then((toggleButton: JQuery<HTMLButtonElement>) => {
        cy.wrap(toggleButton).click();
        cy.get('#options-menu-single-option-example.pf-m-expanded').should('exist');
        cy.get('#singleOption2').then((secondMenuItem: JQuery<HTMLButtonElement>) => {
          cy.wrap(secondMenuItem).click();
          cy.get('#singleOption2')
            .find('.pf-c-options-menu__menu-item-icon')
            .then(secondMenuItemIcon => expect(secondMenuItemIcon).to.be.visible);
          cy.get('#singleOption1 .pf-c-options-menu__menu-item-icon').should('not.exist');
        });
        cy.wrap(toggleButton).click();
        cy.get('#options-menu-single-option-example.pf-m-expanded').should('not.exist');
      });

    cy.get('#options-menu-modified-example')
      .find('.pf-c-options-menu__toggle-button')
      .then((toggleButton: JQuery<HTMLButtonElement>) => {
        cy.wrap(toggleButton).click();
        cy.get('#options-menu-modified-example.pf-m-expanded').should('exist');
        cy.wrap(toggleButton).click();
        cy.get('#options-menu-modified-example.pf-m-expanded').should('not.exist');
        // Accessibility Tests:
        // Press Enter to open the menu
        cy.wrap(toggleButton).trigger('keydown', { key: 'Enter' });
        cy.get('#options-menu-modified-example.pf-m-expanded').should('exist');
        // Check whether on focus of the first item
        cy.get('.pf-c-options-menu__menu-item')
          .first()
          .should('be.focused');
      });
  });

  it('Verify disabled options menu', () => {
    cy.get('#options-menu-modified-disabled')
      .find('.pf-c-options-menu__toggle')
      .should('be.disabled');
  });
});
