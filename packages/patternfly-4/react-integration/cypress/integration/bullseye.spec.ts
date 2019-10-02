describe('Bullseye Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#bullseye-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/bullseye-demo-nav-link');
  });

  it('Verify bullseye', () => {
    cy.get('.pf-l-bullseye').contains('Bullseye ◎ layout');
  });

  it('Verify component prop', () => {
    cy.get('.pf-c-page__main-section').find('span');
  });
});
