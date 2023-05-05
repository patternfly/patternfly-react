describe('Chip Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/chipgroup-default-is-open-demo-nav-link');
  });

  it('Verify chip default text', () => {
    cy.get('.pf-v5-c-chip__text')
      .first()
      .contains('Lemons');
  });

  it('Verify chip is open on default', () => {
    cy.get('.pf-v5-c-chip__text')
      .eq(1)
      .contains('Limes');
  });

  it('Verify chip has badge', () => {
    cy.get('span')
      .children('.pf-v5-c-badge')
      .should('not.be.undefined');
    cy.get('span')
      .children('.pf-v5-c-badge')
      .should('not.equal', null);
  });

  it('Verify show less button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-v5-c-chip__text').contains('more');
  });

  it('Verify more button works', () => {
    cy.get('.pf-m-overflow').click();
    cy.get('.pf-v5-c-chip__text').contains('Show Less');
  });

  it('Verify delete button on first chip', () => {
    const chip = cy.get('.pf-v5-c-chip__content').children('#chip-Lemons');
    cy.get('#remove_chip-Lemons').click();
    chip.should('not.exist');
  });
});
