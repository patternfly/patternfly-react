describe('Small donut utilization chart with static thresholds and right-aligned legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-utilization-sm-static-right-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-utilization-sm-static-right-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('GBps');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '425');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '175');
  });
});
