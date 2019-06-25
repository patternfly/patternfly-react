describe('Pie Orange Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#pie-orange-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/pie-orange-demo-nav-link');
  });

  it('Verify pie chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });
});
