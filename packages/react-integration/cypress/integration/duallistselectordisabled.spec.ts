describe('Dual List Selector Disabled Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-disabled-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-c-dual-list-selector').should('exist');
  });

  it('Verify search inputs are disabled', () => {
    cy.get('.pf-m-available .pf-c-dual-list-selector__tools-filter input')
      .first()
      .should('have.attr', 'disabled');
    cy.get('.pf-m-available .pf-c-dual-list-selector__tools-filter input')
      .last()
      .should('have.attr', 'disabled');
  });

  it('Verify controls are disabled', () => {
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(1)
      .should('have.attr', 'aria-label', 'Add all')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'aria-label', 'Add selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(3)
      .should('have.attr', 'aria-label', 'Remove selected')
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(2)
      .should('have.attr', 'aria-label', 'Remove all')
      .and('have.attr', 'disabled');
  });

  it('Verify selecting options is also disabled', () => {
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('not.exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .and('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('not.exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-m-available .pf-c-dual-list-selector__status-text').contains('0 of 4 items selected');
    cy.get('.pf-c-dual-list-selector__list-item .pf-m-selected').should('have.length', 0);
  });
});
