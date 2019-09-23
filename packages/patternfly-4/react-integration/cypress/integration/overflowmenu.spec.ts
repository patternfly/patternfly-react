describe('OverflowMenu Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#overflow-menu-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/overflow-menu-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('button').should('have.class', 'pf-c-dropdown__toggle'); 
  });

  it('Verify dropdown menu expanded', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');
  });
}); 
