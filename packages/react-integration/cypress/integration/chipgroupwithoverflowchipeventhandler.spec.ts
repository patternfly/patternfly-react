describe('Chip Group with Custom Overflow Chip Event Handler', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#chipgroup-with-overflow-chip-event-handler-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/chipgroup-with-overflow-chip-event-handler-demo-nav-link');
  });

  it('Verify additional text is shown from custom event handler when overflow chip is clicked', () => {
    cy.get('.pf-c-title').should('not.exist');
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-c-title').should('exist');
  });
});
