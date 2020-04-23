describe('Clipboard Copy Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#clipboard-copy-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/clipboard-copy-demo-nav-link');
  });

  it('Verify form input', () => {
    cy.get('input').should('have.class', 'pf-c-form-control');
  });

  it('Verify content expands', () => {
    cy.get('.pf-c-clipboard-copy__group [id*="toggle-"]').click();
    cy.get('.pf-c-clipboard-copy__expandable-content').should('exist');
  });
});
