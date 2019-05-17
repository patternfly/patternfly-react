describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-demo-nav-link');
  });
 
  it('Verify success alert', () => {
    cy.get('.pf-c-alert').should('have.class', 'pf-m-success');
  });
 
  it('Verify success notification title default', () => {
    cy.get('.pf-c-alert__title').contains('Success notification title');
  });
 
  it('Verify success notification description default', () => {
    cy.get('.pf-c-alert__description').contains('Success notification description');
  });
 
  it('Verify success action button exists', () => {
    cy.get('button').should('have.class', 'pf-m-link');
  });
});
