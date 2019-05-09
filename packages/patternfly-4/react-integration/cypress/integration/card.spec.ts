describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
  })
})