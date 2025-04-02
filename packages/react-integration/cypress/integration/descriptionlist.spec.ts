describe('Description List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/description-list-demo-nav-link');
  });

  it('Verify list with help text triggered with mouse', () => {
    cy.get('#description-list-help-text').should('exist').children('.pf-v6-c-description-list__group');
    cy.get('.pf-v6-c-popover__content').should('not.exist');
    cy.get(
      '#description-list-help-text > :nth-child(1) > .pf-v6-c-description-list__term .pf-v6-c-description-list__text'
    ).click();
    cy.get('.pf-v6-c-popover__content').should('exist');
    cy.get('.pf-v6-c-popover__close').click();
    cy.get('.pf-v6-c-popover__content').should('not.exist');
  });

  it('Verify list with help text triggered with enter key', () => {
    cy.get('#description-list-help-text').should('exist').children('.pf-v6-c-description-list__group');
    cy.get('.pf-v6-c-popover__content').should('not.exist');
    cy.tab().type('{enter}');
    cy.get('.pf-v6-c-popover__content').should('exist');
    cy.get('.pf-v6-c-popover__close').type('{enter}');
    cy.get('.pf-v6-c-popover__content').should('not.exist');
  });

  it('Verify list with help text triggered with spacebar', () => {
    cy.get('#description-list-help-text').should('exist').children('.pf-v6-c-description-list__group');
    cy.get('.pf-v6-c-popover__content').should('not.exist');
    cy.tab().tab().type(' ');
    cy.get('.pf-v6-c-popover__content').should('exist');
    cy.get('.pf-v6-c-popover__close').type(' ');
    cy.get('.pf-v6-c-popover__content').should('not.exist');
  });
});
