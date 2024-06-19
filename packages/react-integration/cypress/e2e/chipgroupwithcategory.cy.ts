describe('Chip Group with Category Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/chipgroup-with-category-demo-nav-link');
  });

  it('Verify delete button on first chip group', () => {
    const chipGroup = cy.get('.pf-v5-c-chip-group').first();
    const chipGroupButton = chipGroup.get('#remove_group_category-1');
    chipGroupButton.should('be.visible');
    chipGroupButton.click();
    chipGroup.should('not.exist');
  });

  it('Displays Tooltip', () => {
    cy.get('.pf-v5-c-chip-group__label')
      .last()
      .then((tooltipLink: JQuery<HTMLHeadingElement>) => {
        cy.get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-v5-c-tooltip')
          .should('exist')
          .get('.pf-v5-c-tooltip')
          .contains('Category 3 has a very long name');
      });
  });
});
