describe('Label Group with Category Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/labelgroup-with-category-demo-nav-link');
  });

  it('Verify delete button on first label group', () => {
    const labelGroup = cy.get('.pf-v5-c-label-group').first();
    const labelGroupButton = labelGroup.get('#remove_group_category-1');
    labelGroupButton.should('be.visible');
    labelGroupButton.click();
    labelGroup.should('not.exist');
  });

  it('Displays Tooltip', () => {
    cy.get('.pf-v5-c-label-group__label')
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
