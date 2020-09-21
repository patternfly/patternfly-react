describe('Label Group Default Is Open Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#labelgroup-vertical-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/labelgroup-vertical-demo-nav-link');
  });

  it('Verify label default text', () => {
    cy.get('.pf-c-label__content')
      .first()
      .contains('Lemons');
  });

  it('Verify labelgroup is vertical', () => {
    const labelgroup = cy.get('.pf-c-label-group.pf-m-vertical');
    labelgroup.should('exist');
  });

  it('Verify one label shown', () => {
    cy.get('.pf-c-label-group')
      .find('.pf-c-label')
      .not('.pf-m-overflow')
      .should('have.length', 1);
  });

  it('Verify custom overflow text', () => {
    const overflowButton = cy.get('.pf-m-overflow');
    const overflowLabel = overflowButton.get('.pf-c-label__content');
    overflowLabel.contains('Expand labels');
    overflowButton.click();
    overflowLabel.contains('Collapse labels');
  });

  it('Verify aria-label works', () => {
    cy.get('.pf-c-label-group__list').should('have.attr', 'aria-label', 'Vertical fruit labels');
  });
});
