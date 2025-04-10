describe('Truncate Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/truncate-demo-nav-link');
  });

  it('Verify no tooltip renders by default', () => {
    cy.get('.pf-v6-c-tooltip').should('not.exist');
  });

  it('Verify non-truncated content in wide container does not have tabindex', () => {
    cy.get('#no-truncate').should('not.have.attr', 'tabindex');
  });

  it('Verify truncated content in small container does have tabindex', () => {
    cy.get('#basic-truncate').should('have.attr', 'tabindex');
  });

  it('Verify tooltip renders when truncate is focused', () => {
    cy.get('#basic-truncate').should('have.attr', 'tabindex');
    cy.get('#basic-truncate').focus();
    cy.get('.pf-v6-c-tooltip').should('exist');
  });
});
