describe('Bar Chart Blue Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#purple-bar-grouped-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/purple-bar-grouped-demo-nav-link');
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
