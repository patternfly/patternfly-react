describe('Label Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#label-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/label-demo-nav-link');
  });

  it('Verify default label', () => {
    cy.get('.pf-c-label')
      .first()
      .contains('Grey');
  });

  it('Verify isTruncated label', () => {
    cy.get('#truncated-label .pf-c-label__content span')
      .last()
      .should('have.class', 'pf-c-label__text');
  });
});
