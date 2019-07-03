describe('Line Chart Multicolor Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#line-chart-color-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/line-chart-color-demo-nav-link');
  });

  it('Verify line chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '450');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '275');
  });
});
