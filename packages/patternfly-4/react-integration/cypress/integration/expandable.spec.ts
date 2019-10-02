describe('Expandable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#expandable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/expandable-demo-nav-link');
  });

  it('Verify controlled expandable', () => {
    cy.get('.pf-c-expandable__toggle')
      .first()
      .click();
    cy.get('.pf-c-expandable')
      .first()
      .should('have.class', 'pf-m-expanded');
  });

  it('Verify uncontrolled expandable', () => {
    cy.get('.pf-c-expandable__toggle')
      .last()
      .click();
    cy.get('.pf-c-expandable')
      .last()
      .should('have.class', 'pf-m-expanded');
  });
});
