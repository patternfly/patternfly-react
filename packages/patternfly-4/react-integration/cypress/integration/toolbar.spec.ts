describe('Toolbar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#toolbar-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/toolbar-demo-nav-link');
  });
  it('Verify by toolbar item', () => {
    cy.get('.pf-l-toolbar__section').find('.pf-l-toolbar__item').first().contains('Item 1');
  })

  it('Verify by toolbar group', () => {
    cy.get('.pf-l-toolbar__group').last().find('.pf-l-toolbar__item').contains('Item 7');
  }); 

}); 