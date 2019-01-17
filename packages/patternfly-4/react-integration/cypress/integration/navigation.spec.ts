describe('Navigation', function() {
    it('Verify the app starts up', function() {
      cy.visit('http://localhost:3000/');
      cy.get('.pf-c-avatar');
      expect(true).to.equal(true)
    })
  })