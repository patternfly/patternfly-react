describe('Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dropdown-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('button').should('have.class', 'pf-c-dropdown__toggle'); 
  });

  it('Verify dropdown menu expanded', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');
  });

  it('Verify menu selection/link works', () => {
    cy.get('.pf-c-dropdown__menu-item').first().click();
    cy.url().should('eq', 'https://patternfly-react.surge.sh/patternfly-4/') 
  })
}); 