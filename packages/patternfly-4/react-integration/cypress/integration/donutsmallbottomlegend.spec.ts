describe('Donut Small Bottom Legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-chart-small-bottom-legend-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-chart-small-bottom-legend-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Pets');
  });
});
