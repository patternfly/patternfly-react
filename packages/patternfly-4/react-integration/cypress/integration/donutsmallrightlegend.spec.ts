describe('Donut Small Right Legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-chart-small-right-legend-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-chart-small-right-legend-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Pets');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '275');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '175');
  });
});
