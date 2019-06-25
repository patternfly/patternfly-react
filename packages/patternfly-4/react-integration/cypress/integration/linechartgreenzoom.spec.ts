describe('Line Chart Multicolor Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#line-chart-green-zoom-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/line-chart-green-zoom-demo-nav-link');
  });

  it('Verify line chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });
});
