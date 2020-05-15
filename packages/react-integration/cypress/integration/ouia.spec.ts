describe('Switch Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#ouia-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/ouia-demo-nav-link');
  });

  it('Verify Switches exist', () => {
    cy.get('.pf-c-switch[for="simple-switch"]').should('exist');
    cy.get('.pf-c-switch[for="disabled-switch-off"]').should('exist');
  });

  it('Verify OUIA attributes exist', () => {
    cy.get('.pf-c-switch[for="simple-switch"]').should('have.attr', 'data-ouia-component-type', 'PF4/Switch');
    cy.get('.pf-c-switch[for="simple-switch"]').should('have.attr', 'data-ouia-component-id', 'first_switch');
  });
});
