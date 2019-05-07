describe('Navigation', function() {
    it('Verify the app starts up', function() {
      cy.visit('http://localhost:3000/');
      cy.url().should('eq', 'http://localhost:3000/');
    })
  })