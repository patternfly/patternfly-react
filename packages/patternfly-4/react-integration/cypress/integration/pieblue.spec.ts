describe('Pie Blue Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#pie-blue-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/pie-blue-demo-nav-link');
  });

  it('Verify pie chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '350');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '230');
  });
});
