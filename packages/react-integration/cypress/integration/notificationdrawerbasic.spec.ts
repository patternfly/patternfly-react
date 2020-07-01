describe('Drawer Basic Demo Test', () => {
  it('Navigate to the drawer basic demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#notification-drawer-basic-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/notification-drawer-basic-demo-nav-link');
  });

  it('Verify 0 groups exist', () => {
    cy.get('.pf-c-notification-drawer__group').should('not.exist');
  });

  it('Verify text in header title', () => {
    cy.get('.pf-c-notification-drawer__header-title').contains('Notifications');
  });

  it('Verify text in header status', () => {
    cy.get('.pf-c-notification-drawer__header-status').contains('2 unread');
  });

  it('Verify list items are hoverable', () => {
    cy.get('.pf-c-notification-drawer__list-item')
      .first()
      .should('have.class', 'pf-m-hoverable');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(1)
      .should('have.class', 'pf-m-hoverable');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(2)
      .should('have.class', 'pf-m-hoverable');
    cy.get('.pf-c-notification-drawer__list-item')
      .last()
      .should('have.class', 'pf-m-hoverable');
  });

  it('Verify list items severities', () => {
    cy.get('.pf-c-notification-drawer__list-item')
      .first()
      .should('have.class', 'pf-m-info');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(1)
      .should('have.class', 'pf-m-danger');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(2)
      .should('have.class', 'pf-m-warning');
    cy.get('.pf-c-notification-drawer__list-item')
      .last()
      .should('have.class', 'pf-m-success');
  });

  it('Verify timestamp in list items', () => {
    cy.get('.pf-c-notification-drawer__list-item-timestamp')
      .first()
      .contains('5 minutes ago');
    cy.get('.pf-c-notification-drawer__list-item-timestamp')
      .eq(1)
      .contains('10 minutes ago');
    cy.get('.pf-c-notification-drawer__list-item-timestamp')
      .eq(2)
      .contains('20 minutes ago');
    cy.get('.pf-c-notification-drawer__list-item-timestamp')
      .last()
      .contains('30 minutes ago');
  });

  // Accessibility test
  it('Verify keyboard events happen correctly', () => {
    // Verify the accessibility of toggle button on group list header
    cy.get('#toggle-id-0').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 13 });
      cy.get('#notification-0')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('exist');
      cy.get('#notification-0')
        .find('.pf-c-dropdown__menu-item')
        .first()
        .should('be.focused');
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 9 });
      cy.get('#notification-0')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('not.exist');
    });
    // Verify the accessibility of toggle button on list item header
    cy.get('#toggle-id-1').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 13 });
      cy.get('#notification-1')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('exist');
      cy.get('#notification-1')
        .find('.pf-c-dropdown__menu-item')
        .first()
        .should('be.focused');
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 9 });
      cy.get('#notification-1')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('not.exist');
    });
  });
});
