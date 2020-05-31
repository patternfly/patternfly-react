describe('Drawer Lightweight Demo Test', () => {
  it('Navigate to the drawer lightweight demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#notification-drawer-lightweight-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/notification-drawer-lightweight-demo-nav-link');
  });

  it('Verify text in header title', () => {
    cy.get('.pf-c-notification-drawer__header-title').contains('Notifications');
  });

  it('Verify text in header status', () => {
    cy.get('.pf-c-notification-drawer__header-status').should('not.exist');
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

  it('Verify list items in lightweight drawer are all in unread state', () => {
    cy.get('.pf-c-notification-drawer__list-item')
      .first()
      .should('not.have.class', 'pf-m-read');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(1)
      .should('not.have.class', 'pf-m-read');
    cy.get('.pf-c-notification-drawer__list-item')
      .eq(2)
      .should('not.have.class', 'pf-m-read');
    cy.get('.pf-c-notification-drawer__list-item')
      .last()
      .should('not.have.class', 'pf-m-read');
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

  it('Verify all badges are marked unread', () => {
    cy.get('.pf-c-notification-drawer__group-toggle-count')
      .first()
      .should('not.have.attr', 'pf-m-unread');
    cy.get('.pf-c-notification-drawer__group-toggle-count')
      .eq(1)
      .should('not.have.attr', 'pf-m-unread');
    cy.get('.pf-c-notification-drawer__group-toggle-count')
      .last()
      .should('not.have.attr', 'pf-m-unread');
  });
});
