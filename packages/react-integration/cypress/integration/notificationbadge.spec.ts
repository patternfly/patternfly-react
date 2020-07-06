describe('Notification Badge Demo Test', () => {
  it('Navigate to notificatoin badge demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#notification-badge-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/notification-badge-demo-nav-link');
  });

  it('Verify notification badge is unread', () => {
    cy.get('.pf-c-notification-badge')
      .first()
      .should('have.class', 'pf-m-unread');
    cy.get('.pf-c-notification-badge')
      .last()
      .should('have.class', 'pf-m-attention');
    cy.get('.pf-c-notification-badge__count').contains('30');
  });

  it('Verify notification badge is read after click', () => {
    cy.get('#notification-demo-badge1').click();
    cy.get('.pf-c-notification-badge')
      .first()
      .should('have.class', 'pf-m-read');
    cy.get('#notification-demo-badge2').click();
    cy.get('.pf-c-notification-badge')
      .last()
      .should('have.class', 'pf-m-read');
    cy.get('.pf-c-notification-badge__count').should('not.exist');
  });
});
