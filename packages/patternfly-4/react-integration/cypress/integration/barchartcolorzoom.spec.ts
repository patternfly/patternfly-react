describe('Bar Chart Multicolor with Zoom Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#color-bar-zoom-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/color-bar-zoom-demo-nav-link');
  });

  it('Verify bar chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.VictoryContainer > svg').should('have.attr', 'width', '450');
    cy.get('.VictoryContainer > svg').should('have.attr', 'height', '300');
  });
});
