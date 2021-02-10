describe('Label Group Default Is Open Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#labelgroup-default-is-open-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/labelgroup-default-is-open-demo-nav-link');
  });

  it('Verify label default text', () => {
    cy.get('.pf-c-label__content')
      .first()
      .contains('Lemons');
  });

  it('Verify label is open on default', () => {
    cy.get('.pf-c-label__content')
      .eq(3)
      .contains('grapefruit');
  });

  it('Verify label has badge', () => {
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.be.undefined');
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.equal', null);
  });

  it('Verify show less button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-c-label__content').contains('more');
  });

  it('Verify more button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-c-label__content').contains('Show Less');
  });

  it('Verify delete button on first label', () => {
    const label = cy.get('.pf-c-label').eq(0);
    label.children('.pf-c-button').click();
    label.should('not.exist');
  });
});
