describe('Area Chart Simple Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#sparkline-chart-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/sparkline-chart-demo-nav-link');
  });

  it('Verify area chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('CPU');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '400');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '100');
  });

});
