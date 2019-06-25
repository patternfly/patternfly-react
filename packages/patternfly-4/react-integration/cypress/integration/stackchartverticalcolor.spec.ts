describe('Stack Chart Vertical Color Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#stack-vertical-color-zoom-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/stack-vertical-color-zoom-demo-nav-link');
  });

  it('Verify stack chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });
});
