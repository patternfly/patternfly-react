describe('Flex Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#flex-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/flex-demo-nav-link');
  });
  it('Verify flex', () => {
    cy.get('.pf-c-page__main-section')
      .find('div')
      .first()
      .should('have.class', 'pf-l-flex');
  });
  it('Verify flex item', () => {
    cy.get('.pf-l-flex')
      .find('div')
      .first()
      .should('contain', 'Flex item');
  });
});
