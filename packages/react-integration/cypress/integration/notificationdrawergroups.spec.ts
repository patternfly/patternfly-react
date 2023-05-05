describe('Notification Drawer Groups Demo Test', () => {
  it('Navigate to the notification drawer groups demo', () => {
    cy.visit('http://localhost:3000/notification-drawer-groups-demo-nav-link');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-v5-c-button > svg').should('exist');
  });

  it('Verify text in header title', () => {
    cy.get('.pf-v5-c-notification-drawer__header-title').contains('Notifications');
  });

  it('Verify text in header status', () => {
    cy.get('.pf-v5-c-notification-drawer__header-status').contains('4 unread');
  });

  it('Verify 3 groups exist', () => {
    cy.get('.pf-v5-c-notification-drawer__group').then((groups) => expect(groups.length).to.equal(3));
  });

  it('Verify first and last list items are hidden', () => {
    cy.get('.pf-c-notification-drawer__list').first().should('have.attr', 'hidden');
    cy.get('.pf-c-notification-drawer__list').eq(1).should('not.have.attr', 'hidden', false);
    cy.get('.pf-c-notification-drawer__list').last().should('have.attr', 'hidden');
  });

  it('Verify first item is expanded after click', () => {
    cy.get('.pf-v5-c-notification-drawer__group').first().click();
    cy.get('.pf-c-notification-drawer__list').should('not.have.attr', 'hidden');
  });

  it('Verify list items are hoverable', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item').first().should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(1).should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(2).should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').last().should('have.class', 'pf-m-hoverable');
  });

  it('Verify list items severities', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item').first().should('have.class', 'pf-m-info');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(1).should('have.class', 'pf-m-danger');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(2).should('have.class', 'pf-m-warning');
    cy.get('.pf-v5-c-notification-drawer__list-item').last().should('have.class', 'pf-m-success');
  });

  it('Verify timestamp in list items', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').first().contains('5 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').eq(1).contains('10 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').eq(2).contains('20 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').last().contains('30 minutes ago');
  });

  // Accessibility test
  it('Verify keyboard events happen correctly', () => {
    // Verify the list header toggle button keyboard interactivity opens/closes dropdown menu
    // press Enter on toggle button, check whether the dropdown menu exsit and whether it focuses on the first item
    // then press Tab on toggle button, check whether the dropdown menu is closed
    cy.get('#toggle-id-0').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).type('{enter}', {waitForAnimations:true});
      cy.get('#notification-0')
        .find('.pf-v5-c-menu')
        .should('exist');
      cy.wrap(toggleButton).type('{esc}', {waitForAnimations:true});
      cy.get('#notification-0')
        .find('.pf-v5-c-menu')
        .should('not.exist');
    });
    // Verify the group header keyboard interactivity opens/closes the whole group
    // check whether the whole group is expanded, then press Enter on the group header and check whether the whole group is closed
    cy.get('.pf-v5-c-notification-drawer__group').first().should('have.class', 'pf-m-expanded');
    cy.get('.pf-v5-c-notification-drawer__group-toggle').first().trigger('keydown', { key: 'Enter' });
    cy.get('.pf-v5-c-notification-drawer__group').first().should('not.have.class', 'pf-m-expanded');
    // Verify the list item header toggle button keyboard interactivity opens/closes dropdown menu
    cy.get('#toggle-id-9').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).type('{enter}', {waitForAnimations:true});
      cy.get('#notification-9')
        .find('.pf-v5-c-menu')
        .should('exist');
      cy.wrap(toggleButton).type('{esc}', {waitForAnimations:true});
      cy.get('#notification-9')
        .find('.pf-v5-c-menu')
        .should('not.exist');
    });
  });

  it('Verify truncateTitle for group title and no tooltip on short text', () => {
    cy.get(
      '#short-group-title > h1 > .pf-v5-c-notification-drawer__group-toggle > .pf-v5-c-notification-drawer__group-toggle-title'
    ).then((noTooltipLink: JQuery<HTMLDivElement>) => {
      cy.wrap(noTooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('not.exist');
      cy.wrap(noTooltipLink).trigger('mouseleave');
    });
  });

  it('Verify truncateTitle group title and tooltip', () => {
    cy.get(
      '#long-group-title > h1 > .pf-v5-c-notification-drawer__group-toggle .pf-v5-c-notification-drawer__group-toggle-title'
    ).then((tooltipLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-v5-c-tooltip').should('not.exist');
      cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
      cy.wrap(tooltipLink).trigger('mouseleave');
    });
  });

  it('Verify truncated with no truncateTitle prop group title and tooltip on long title', () => {
    cy.get(
      '#long-title-no-truncate-prop > h1 > .pf-v5-c-notification-drawer__group-toggle .pf-v5-c-notification-drawer__group-toggle-title'
    ).then((tooltipLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-v5-c-tooltip').should('not.exist');
      cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
      cy.wrap(tooltipLink).trigger('mouseleave');
    });
  });
});
