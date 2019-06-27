describe('Green donut utilization with static thresholds and right-aligned (custom) legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-utilization-green-static-right-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-utilization-green-static-right-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('GBps');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '230');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '350');
  });
});
