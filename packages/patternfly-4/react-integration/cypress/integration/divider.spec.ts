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

  it('Verify divider with li', () => {
    cy.get('.pf-c-divider')
      .should('have.attr', 'role');
  });

  it('Verify divider with div', () => {
    cy.get('.pf-c-divider')
      .should('have.attr', 'role');
  });
});
