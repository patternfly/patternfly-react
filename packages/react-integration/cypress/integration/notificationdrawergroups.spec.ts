describe('Notification Drawer Groups Demo Test', () => {
  it('Navigate to the notification drawer groups demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#notification-drawer-groups-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/notification-drawer-groups-demo-nav-link');
  });

  it('Verify x icon in header', () => {
    cy.get('.fa-times').should('exist');
  });

  it('Verify text in header title', () => {
    cy.get('.pf-c-notification-drawer__header-title').contains('Notifications');
  });

  it('Verify text in header status', () => {
    cy.get('.pf-c-notification-drawer__header-status').contains('4 unread');
  });

  it('Verify 3 groups exist', () => {
    cy.get('.pf-c-notification-drawer__group').then(groups => expect(groups.length).to.equal(3));
  });

  it('Verify first and last list items are hidden', () => {
    cy.get('.pf-c-notification-drawer__list')
      .first()
      .should('have.attr', 'hidden');
    cy.get('.pf-c-notification-drawer__list')
      .eq(1)
      .should('not.have.attr', 'hidden', false);
    cy.get('.pf-c-notification-drawer__list')
      .last()
      .should('have.attr', 'hidden');
  });

  it('Verify first item is expanded after click', () => {
    cy.get('.pf-c-notification-drawer__group')
      .first()
      .click();
    cy.get('.pf-c-notification-drawer__list').should('not.have.attr', 'hidden');
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
    // Verify the list header toggle button keyboard interactivity opens/closes dropdown menu
    // press Enter on toggle button, check whether the dropdown menu exsit and whether it focuses on the first item
    // then press Tab on toggle button, check whether the dropdown menu is closed
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
    // Verify the group header keyboard interactivity opens/closes the whole group
    // check whether the whole group is expanded, then press Enter on the group header and check whether the whole group is closed
    cy.get('.pf-c-notification-drawer__group')
      .first()
      .should('have.class', 'pf-m-expanded');
    cy.get('.pf-c-notification-drawer__group-toggle')
      .first()
      .trigger('keydown', { keyCode: 13 });
    cy.get('.pf-c-notification-drawer__group')
      .first()
      .should('not.have.class', 'pf-m-expanded');
    // Verify the list item header toggle button keyboard interactivity opens/closes dropdown menu
    cy.get('#toggle-id-9').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 13 });
      cy.get('#notification-9')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('exist');
      cy.get('#notification-9')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .first()
        .find('.pf-c-dropdown__menu-item')
        .should('be.focused');
      cy.wrap(toggleButton).trigger('keydown', { keyCode: 9 });
      cy.get('#notification-9')
        .find('.pf-c-dropdown__menu.pf-m-align-right')
        .should('not.exist');
    });
  });
});
