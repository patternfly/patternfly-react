describe('Brand Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#code-block-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/code-block-demo-nav-link');
  });

  it('Verify code block', () => {
    cy.get('.pf-c-code-block').should('exist');
    cy.get('.pf-c-code-block__actions-item').should('exist');
    cy.get('.pf-c-code-block__code').should('exist');
  });
});
