describe('Alert Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-group-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-group-demo-nav-link');
  });

  it('Pressing start async button starts alerts', () => {
    cy.get('.pf-m-secondary').first().click();
    cy.get('.pf-c-alert').should('have.class', 'pf-m-info');
    cy.get('.pf-m-secondary').last().click();
  })

  it('Alerts are toast alerts', () => {
    cy.get('.pf-c-alert-group').should('have.class', 'pf-m-toast');
  })

  it('Verify alert closes', () => {
    cy.get('#test-button').click();
    cy.get('.pf-c-alert').should('not.exist');
  })
});