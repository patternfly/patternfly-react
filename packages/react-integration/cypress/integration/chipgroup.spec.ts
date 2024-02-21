describe('Chip Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/chipgroup-demo-nav-link');
  });

  it('Verify chip default text', () => {
    cy.get('.pf-v6-c-label__text').first().contains('Lemons');
  });

  it('Verify chip has badge', () => {
    cy.get('span').children('.pf-v6-c-badge').should('not.be.undefined');
    cy.get('span').children('.pf-v6-c-badge').should('not.equal', null);
  });

  it('Verify delete button on first chip', () => {
    const chip = cy.get('#chip-Lemons');
    cy.get('#chip-Lemons button').click();
    chip.should('not.exist');
  });
});
