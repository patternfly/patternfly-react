describe('Label Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#labelgroup-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/labelgroup-demo-nav-link');
  });

  it('Verify label default content', () => {
    cy.get('.pf-c-label__content')
      .first()
      .contains('Lemons');
  });

  it('Verify label has badge', () => {
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.be.undefined');
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.equal', null);
  });

  it('Verify delete button on second label', () => {
    const label = cy.get('.pf-c-label').eq(1);
    label.children('.pf-c-button').click();
    label.should('not.exist');
  });
});
