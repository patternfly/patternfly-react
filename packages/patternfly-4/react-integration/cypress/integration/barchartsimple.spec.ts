describe('Bar Chart Simple Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#bar-chart-simple-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/bar-chart-simple-demo-nav-link');
  });

  it('Verify bar chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '600');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '250');
  });
});
