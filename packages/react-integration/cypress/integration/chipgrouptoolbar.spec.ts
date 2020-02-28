describe('Chip Group Toolbar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#chipgroup-toolbar-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/chipgroup-toolbar-demo-nav-link');
  });

  it('Verify toolbar modifier on first chip group', () => {
    cy.get('.pf-c-chip-group')
      .first()
      .should('have.class', 'pf-m-toolbar');
  });

  it('Verify delete button on first chip group', () => {
    const chipGroup = cy.get('.pf-c-chip-group').first();
    const chipGroupButton = chipGroup.get('#remove_group_pf-random-id-0');
    chipGroupButton.should('be.visible');
    chipGroupButton.click();
    chipGroup.should('not.exist');
  });
});
