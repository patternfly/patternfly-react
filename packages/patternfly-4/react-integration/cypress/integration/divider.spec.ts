describe('Divider Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#divider-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/divider-demo-nav-link');
  });

  it('Verify divider with hr', () => {
    cy.get('.pf-c-divider')
      .first()
  });

  it('Verify compact label', () => {
    cy.get('.pf-m-compact').contains('Compact label');
  });
});
