describe('Notification Drawer Basic Demo Test', () => {
  it('Navigate to the notification drawer basic demo', () => {
    cy.visit('http://localhost:3000/notification-drawer-basic-demo-nav-link');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-v5-c-button > svg').should('exist');
  });

  it('Verify 0 groups exist', () => {
    cy.get('.pf-v5-c-notification-drawer__group').should('not.exist');
  });

  it('Verify text in header title', () => {
    cy.get('.pf-v5-c-notification-drawer__header-title').contains('Notifications');
  });

  it('Verify text in header status', () => {
    cy.get('.pf-v5-c-notification-drawer__header-status').contains('2 unread');
  });

  it('Verify list items are hoverable', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item').first().should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(1).should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(2).should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(3).should('have.class', 'pf-m-hoverable');
    cy.get('.pf-v5-c-notification-drawer__list-item').last().should('have.class', 'pf-m-hoverable');
  });

  it('Verify list items severities', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item').first().should('have.class', 'pf-m-info');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(1).should('have.class', 'pf-m-danger');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(2).should('have.class', 'pf-m-warning');
    cy.get('.pf-v5-c-notification-drawer__list-item').eq(3).should('have.class', 'pf-m-success');
    cy.get('.pf-v5-c-notification-drawer__list-item').last().should('have.class', 'pf-m-custom');
  });

  it('Verify timestamp in list items', () => {
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').first().contains('5 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').eq(1).contains('10 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').eq(2).contains('20 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').eq(3).contains('30 minutes ago');
    cy.get('.pf-v5-c-notification-drawer__list-item-timestamp').last().contains('35 minutes ago');
  });

  // Accessibility test
  it('Verify keyboard events happen correctly', () => {
    // Verify the list header toggle button keyboard interactivity opens/closes dropdown menu
    // press Enter on toggle button, check whether the dropdown menu exsit and whether it focuses on the first item
    // then press Tab on toggle button, check whether the dropdown menu is closed
    cy.get('#toggle-id-0').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).type(' ', {waitForAnimations:true});
      cy.get('#notification-0')
        .find('.pf-v5-c-menu')
        .should('exist');
      cy.wrap(toggleButton).type('{esc}', {waitForAnimations:true});
      cy.get('#notification-0')
        .find('.pf-v5-c-menu')
        .should('not.exist');
    });
    // Verify the list item header toggle button keyboard interactivity opens/closes dropdown menu
    // the method is the same as above
    cy.get('#toggle-id-1').then((toggleButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(toggleButton).type(' ', {waitForAnimations:true});
      cy.get('#notification-1')
        .find('.pf-v5-c-menu')
        .should('exist');
      cy.wrap(toggleButton).type('{esc}', {waitForAnimations:true});
      cy.get('#notification-1')
        .find('.pf-v5-c-menu')
        .should('not.exist');
    });
  });

  it('Verify truncateTitle in drawer header list item header and no tooltip on short text', () => {
    cy.get('#info-alert-item .pf-v5-c-notification-drawer__list-item-header-title')
      .should('have.class', 'pf-m-truncate')
      .then((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  it('Verify truncateTitle in drawer group title and tooltip', () => {
    cy.get('#long-title-item .pf-v5-c-notification-drawer__list-item-header-title')
      .should('have.class', 'pf-m-truncate')
      .then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });
});
