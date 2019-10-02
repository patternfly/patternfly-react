describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-demo-nav-link');
  });

  it('Verify info alert', () => {
    cy.get('#info-alert').should('have.class', 'pf-m-info');
  });

  it('Verify default inline alert', () => {
    cy.get('#default-alert').should('not.have.class', 'pf-m-info');
    cy.get('#default-alert').should('not.have.class', 'pf-success');
    cy.get('#default-alert').should('not.have.class', 'pf-m-danger');
    cy.get('#default-alert').should('not.have.class', 'pf-m-warning');
    cy.get('#default-alert').should('have.class', 'pf-m-inline');
  });

  it('Verify alert closes', () => {
    cy.get('#test-button').click();
    cy.get('#info-alert').should('not.exist');
  });
});
