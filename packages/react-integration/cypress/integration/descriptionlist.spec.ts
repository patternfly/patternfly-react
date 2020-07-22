describe('Description List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#description-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/description-list-demo-nav-link');
  });

  it('Verify default list and group', () => {
    cy.get('.pf-c-description-list')
      .should('exist')
      .children('.pf-c-description-list__group');
  });

  it('Verify text', () => {
    cy.get('.pf-c-description-list__term').contains('Name');
  });

  it('Verify description', () => {
    cy.get('.pf-c-description-list__description').contains('Example');
  });
});
