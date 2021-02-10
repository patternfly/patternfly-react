describe('Empty State Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#empty-state-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/empty-state-demo-nav-link');
  });

  it('Verify large empty state', () => {
    cy.get('#large-empty-state').should('have.class', 'pf-m-lg');
  });

  it('Verify full empty state', () => {
    cy.get('#full-empty-state')
      .contains('Full Empty State')
      .and('not.have.class', 'pf-m-large')
      .and('not.have.class', 'pf-m-small')
      .and('not.have.class', 'pf-m-xl')
      .and('not.have.class', 'pf-m-xs');
  });

  it('Verify small empty state', () => {
    cy.get('#small-empty-state').should('have.class', 'pf-m-sm');
  });

  it('Verify extra large empty state', () => {
    cy.get('#xl-empty-state').should('have.class', 'pf-m-xl');
  });

  it('Verify extra small empty state', () => {
    cy.get('#xs-empty-state').should('have.class', 'pf-m-xs');
  });

  it('Verify full height example carries modifier class', () => {
    cy.get('.pf-c-empty-state#full-height-example').should('have.class', 'pf-m-full-height');
  });
});
