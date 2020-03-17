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
    cy.get('.pf-m-tertiary').should('be.disabled');
  });

  it('Link button should be set to tabindex=-1', () => {
    cy.get('.pf-m-link').should('have.attr', 'tabindex', '-1');
  });

  // do this last since it leaves the page
  it('Verify primary button clicks', () => {
    cy.get('button.pf-m-primary')
      .parent()
      .should('have.attr', 'href', 'https://www.google.com');
  });
});
