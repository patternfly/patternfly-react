describe('Pie Color Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#pie-color-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/pie-color-demo-nav-link');
  });

  it('Verify pie chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '300');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '275');
  });
});
