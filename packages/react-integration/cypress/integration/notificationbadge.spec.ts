describe('Notification Badge Demo Test', () => {
  it('Navigate to notificatoin badge demo section', () => {
    cy.visit('http://localhost:3000/notification-badge-demo-nav-link');
  });

  it('Verify notification badge is unread', () => {
    cy.get('.pf-v5-c-notification-badge').first().should('have.class', 'pf-m-unread');
    cy.get('.pf-v5-c-notification-badge').last().should('have.class', 'pf-m-attention');
    cy.get('.pf-v5-c-notification-badge__count').contains('30');
  });

  it('Verify notification badge is read after click', () => {
    cy.get('#notification-demo-badge1').click();
    cy.get('.pf-v5-c-notification-badge').first().should('have.class', 'pf-m-read');
    cy.get('#notification-demo-badge2').click();
    cy.get('.pf-v5-c-notification-badge').last().should('have.class', 'pf-m-read');
  });
});
