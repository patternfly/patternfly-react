describe('Area Chart Simple Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#area-chart-simple-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/area-chart-simple-demo-nav-link');
  });

  it('Verify area chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '800');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '200');
  });

});
