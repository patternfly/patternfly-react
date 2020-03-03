describe('Progress Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#progress-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/progress-demo-nav-link');
  });

  it('Verify simple progress', () => {
    cy.get('#simple-progress-description').contains('Simple progress');
    cy.get('#simple-progress .pf-c-progress__status .pf-c-progress__measure').contains('33%');
  });
});
