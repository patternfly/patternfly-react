describe('List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/list-demo-nav-link');
  });

  it('Verify plain list', () => {
    cy.get('.pf-c-list li').contains('I am a plain list item');
  });

  it('Verify inline list', () => {
    cy.get('.pf-m-inline li').contains('I am an inline list item');
  });
});
