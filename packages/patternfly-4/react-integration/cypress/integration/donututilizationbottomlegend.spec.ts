describe('Donut Utilization with Bottom Legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-utilization-simple-bottom-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-utilization-simple-bottom-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('GBps');
  });
});
