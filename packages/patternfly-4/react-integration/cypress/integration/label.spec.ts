describe('Label Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#label-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/label-demo-nav-link');
  });

  it('Verify default label', () => {
    cy.get('.pf-c-label')
      .first()
      .contains('Default label');
  });

  it('Verify compact label', () => {
    cy.get('.pf-m-compact').contains('Compact label');
  });
});
