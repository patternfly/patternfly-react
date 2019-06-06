describe('Application Launcher Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#application-launcher-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/application-launcher-demo-nav-link');
  });
 
  it('Verify application launcher button', () => {
    cy.get('button').should('have.class', 'pf-c-button pf-m-plain');
  });

  it('Verify clicking app launcher loads menu', () => {
    cy.get('#pf-random-id-0').click();
    cy.get('ul').should('have.class', 'pf-c-app-launcher__menu');
  });
});
