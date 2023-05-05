describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/card-demo-nav-link');
  });

  it('Verify that selectable card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCard').focus();
    cy.focused().should('have.class', 'pf-m-selectable');
    cy.focused().should('not.have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected');
  });

  it('Verify that selectableRaised card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCardRaised').focus();
    cy.focused().should('have.class', 'pf-m-selectable-raised');
    cy.focused().should('not.have.class', 'pf-m-selected-raised');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected-raised');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected-raised');
  });

  it('Verify card is expandable', () => {
    cy.get('#expand-card').should('not.have.class', 'pf-m-expanded');
    cy.get('#expand-card .pf-v5-c-card__header').should('have.class', 'pf-m-toggle-right');
    cy.get('.pf-v5-c-card__header-toggle .pf-v5-c-button').click();
    cy.get('#expand-card').should('have.class', 'pf-m-expanded');
  });
});
