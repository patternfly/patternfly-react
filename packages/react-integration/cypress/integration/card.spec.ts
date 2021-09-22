describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
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

  it('Verify card is expandable', () => {
    cy.get('#expand-card').should('not.have.class', 'pf-m-expanded');
    cy.get('#expand-card .pf-c-card__header').should('have.class', 'pf-m-toggle-right');
    cy.get('.pf-c-card__header-toggle .pf-c-button').click();
    cy.get('#expand-card').should('have.class', 'pf-m-expanded');
  });
});
