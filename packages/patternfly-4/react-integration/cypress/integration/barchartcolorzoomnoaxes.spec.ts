describe('Bar Chart Multicolor with Zoom, No Axes Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#color-bar-zoom-no-axes-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/color-bar-zoom-no-axes-demo-nav-link');
  });

  it('Verify bar chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });
});
