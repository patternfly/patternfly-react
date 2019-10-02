describe('Button Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#button-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link');
  });

  it('Verify primary button', () => {
    cy.get('button').should('have.class', 'pf-m-primary');
  });

  it('Verify secondary button', () => {
    cy.get('button').should('have.class', 'pf-m-secondary');
  });

  it('Verify tertiary button', () => {
    cy.get('button').should('have.class', 'pf-m-tertiary');
  });

  it('Tertiary button should be disabled', () => {
    cy.get('.pf-m-tertiary').should('have.class', 'pf-m-disabled');
  });

  it('Verify primary button clicks', () => {
    cy.get('.pf-m-primary').click();
    cy.url().should('not.eq', 'http://localhost:3000/button-demo-nav-link');
  });
});
