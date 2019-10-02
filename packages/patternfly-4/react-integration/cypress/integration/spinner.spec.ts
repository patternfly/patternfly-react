describe('Spinner Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#spinner-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/spinner-demo-nav-link');
  });
  it('Verify small spinner', () => {
    cy.get('.pf-c-spinner.pf-m-sm').should('exist');
  });
  it('Verify medium spinner', () => {
    cy.get('.pf-c-spinner.pf-m-md').should('exist');
  });
  it('Verify large spinner', () => {
    cy.get('.pf-c-spinner.pf-m-lg').should('exist');
  });

  it('Verify extra large spinner', () => {
    cy.get('.pf-c-spinner.pf-m-xl').should('exist');
  });
});
