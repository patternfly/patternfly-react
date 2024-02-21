describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/card-demo-nav-link');
  });

  it('Verify card with actions', () => {
    cy.get('#cardWithActions .pf-v6-c-menu-toggle').then(($menuToggle) => {
      cy.wrap($menuToggle).should('not.have.class', 'pf-m-expanded');
      cy.wrap($menuToggle).click();
      cy.wrap($menuToggle).should('have.class', 'pf-m-expanded');
    });
    cy.get('#cardWithActions .pf-v6-c-menu .pf-v6-c-menu__item').first().click();
    cy.get('#cardWithActions .pf-v6-c-menu-toggle').should('not.have.class', 'pf-m-expanded');
  });

  it('Verify that deprecated selectable card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCardDeprecated').focus();
    cy.focused().should('have.class', 'pf-m-selectable');
    cy.focused().should('not.have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected');
  });

  it('Verify card is expandable', () => {
    cy.get('#expand-card').should('not.have.class', 'pf-m-expanded');
    cy.get('#expand-card .pf-v6-c-card__header').should('have.class', 'pf-m-toggle-right');
    cy.get('.pf-v6-c-card__header-toggle .pf-v6-c-button').click();
    cy.get('#expand-card').should('have.class', 'pf-m-expanded');
  });

  it('Verify new selectable card can be selected', () => {
    cy.get('#selectable-card-example-1 #selectable-card-input-1').should('not.be.checked');
    cy.get('#selectable-card-example-2 #selectable-card-input-2').should('not.be.checked');
    cy.get('#selectable-card-example-1').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#selectable-card-input-1').should('be.checked');
      cy.get('#selectable-card-example-2 #selectable-card-input-2').should('not.be.checked');
    });
    cy.get('#selectable-card-example-2').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#selectable-card-input-2').should('be.checked');
      cy.get('#selectable-card-example-1 #selectable-card-input-1').should('be.checked');
    });
  });

  it('Verify new single selectable card can be selected', () => {
    cy.get('#single-selectable-card-example-1 #single-selectable-card-input-1').should('not.be.checked');
    cy.get('#single-selectable-card-example-2 #single-selectable-card-input-2').should('not.be.checked');
    cy.get('#single-selectable-card-example-1').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#single-selectable-card-input-1').should('be.checked');
      cy.get('#single-selectable-card-example-2 #single-selectable-card-input-2').should('not.be.checked');
    });
    cy.get('#single-selectable-card-example-2').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#single-selectable-card-input-2').should('be.checked');
      cy.get('#single-selectable-card-example-1 #single-selectable-card-input-1').should('not.be.checked');
    });
  });

  it('Verify clickable only card action is triggered', () => {
    cy.get('#clickable-card-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#clickable-card-example-1 #clickable-card-input-1').should('not.be.checked');
    cy.get('#clickable-card-example-1').click();
    cy.get('#clickable-card-drawer').should('have.class', 'pf-m-expanded');
    cy.get('#clickable-card-example-1 #clickable-card-input-1').should('be.checked');
  });

  it('Verify clickable only card link is navigated to', () => {
    cy.location('pathname').should('eq', '/card-demo-nav-link');
    cy.get('#clickable-card-example-2').click();
    cy.location('pathname').should('eq', '/button-demo-nav-link');
    cy.go('back');
  });

  it('Verify clickable and selectable card', () => {
    cy.get('#clickable-selectable-card-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#clickable-selectable-card-example-1 #clickable-selectable-card-input-1').should('not.be.checked');
    // Clicking outside clickable areas should not change input or trigger action
    cy.get('#clickable-selectable-card-example-1').click();
    cy.get('#clickable-selectable-card-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#clickable-selectable-card-example-1 #clickable-selectable-card-input-1').should('not.be.checked');

    // Ciicking input should not trigger action
    cy.get('#clickable-selectable-card-example-1 #clickable-selectable-card-input-1').click();
    cy.get('#clickable-selectable-card-example-1 #clickable-selectable-card-input-1').should('be.checked');
    cy.get('#clickable-selectable-card-drawer').should('not.have.class', 'pf-m-expanded');

    cy.get('#clickable-selectable-card-example-1 .pf-v6-c-button').click();
    cy.get('#clickable-selectable-card-drawer').should('have.class', 'pf-m-expanded');
  });
});
