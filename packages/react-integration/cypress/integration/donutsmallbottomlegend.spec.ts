describe('Donut Small Bottom Legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-chart-small-bottom-legend-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-chart-small-bottom-legend-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.pf-c-chart').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Pets');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-c-chart > svg').should('have.attr', 'width', '300');
    cy.get('.pf-c-chart > svg').should('have.attr', 'height', '200');
  });
});
