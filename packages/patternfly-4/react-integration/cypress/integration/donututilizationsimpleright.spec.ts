describe('Simple donut utilization chart with right-aligned legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-utilization-simple-right-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-utilization-simple-right-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('GBps');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '435');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '230');
  });
});
