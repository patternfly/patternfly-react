describe('Notification Badge Demo Test', () => {
  it('Navigate to notificatoin badge demo section', () => {
    cy.visit('http://localhost:3000/notification-badge-demo-nav-link');
  });

  it('Verify notification badge is unread', () => {
    cy.get('#notification-demo-badge1').should('have.class', 'pf-m-unread');
    cy.get('#notification-demo-badge2').should('have.class', 'pf-m-attention');
    cy.get('#notification-demo-badge2').contains('30');
  });

  it('Verify notification badge is read after click', () => {
    cy.get('#notification-demo-badge1').click();
    cy.get('#notification-demo-badge1').should('have.class', 'pf-m-read');
    cy.get('#notification-demo-badge2').click();
    cy.get('#notification-demo-badge2').should('have.class', 'pf-m-read');
  });
});
