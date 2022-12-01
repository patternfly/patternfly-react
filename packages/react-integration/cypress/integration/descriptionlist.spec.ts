describe('Description List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/description-list-demo-nav-link');
  });

  it('Verify list with help text', () => {
    cy.get('#description-list-help-text')
      .should('exist')
      .children('.pf-c-description-list__group');
    cy.get('.pf-c-popover__content').should('not.exist');
    cy.get(
      '#description-list-help-text > :nth-child(1) > .pf-c-description-list__term .pf-c-description-list__text'
    ).click();
    cy.get('.pf-c-popover__content').should('exist');
  });
});
