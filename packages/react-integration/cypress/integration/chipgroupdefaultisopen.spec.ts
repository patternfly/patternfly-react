describe('Chip Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#chipgroup-default-is-open-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/chipgroup-default-is-open-demo-nav-link');
  });

  it('Verify chip default text', () => {
    cy.get('.pf-c-chip__text')
      .first()
      .contains('Lemons');
  });

  it('Verify chip is open on default', () => {
    cy.get('.pf-c-chip__text')
      .eq(1)
      .contains('Limes');
  });

  it('Verify chip has badge', () => {
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.be.undefined');
    cy.get('span')
      .children('.pf-c-badge')
      .should('not.equal', null);
  });

  it('Verify show less button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-c-chip__text').contains('more');
  });

  it('Verify more button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-c-chip__text').contains('Show Less');
  });

  it('Verify delete button on first chip', () => {
    const chip = cy.get('.pf-c-chip').children('#pf-random-id-1');
    cy.get('#remove_pf-random-id-1').click();
    chip.should('not.exist');
  });
});
