describe('Label Group with Category Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#labelgroup-with-category-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/labelgroup-with-category-demo-nav-link');
  });

  it('Verify delete button on first label group', () => {
    const labelGroup = cy.get('.pf-c-label-group').first();
    const labelGroupButton = labelGroup.get('#remove_group_pf-random-id-0');
    labelGroupButton.should('be.visible');
    labelGroupButton.click();
    labelGroup.should('not.exist');
  });

  it('Displays Tooltip', () => {
    cy.get('.pf-c-label-group__label')
      .last()
      .then((tooltipLink: JQuery<HTMLHeadingElement>) => {
        cy.get('.pf-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist')
          .get('.pf-c-tooltip')
          .contains('Category 3 has a very long name');
      });
  });
});
