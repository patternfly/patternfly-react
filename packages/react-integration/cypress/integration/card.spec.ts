describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/card-demo-nav-link');
  });

  it.skip('Verify that deprecated selectable card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCardDeprecated').focus();
    cy.focused().should('have.class', 'pf-m-selectable');
    cy.focused().should('not.have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected');
  });

  it.skip('Verify that selectableRaised card can be selected and unselected with keyboard input', () => {
    cy.get('#selectableCardRaised').focus();
    cy.focused().should('have.class', 'pf-m-selectable-raised');
    cy.focused().should('not.have.class', 'pf-m-selected-raised');
    cy.focused().type('{enter}');
    cy.focused().should('have.class', 'pf-m-selected-raised');
    cy.focused().type('{enter}');
    cy.focused().should('not.have.class', 'pf-m-selected-raised');
  });

  it.skip('Verify card is expandable', () => {
    cy.get('#expand-card').should('not.have.class', 'pf-m-expanded');
    cy.get('#expand-card .pf-v5-c-card__header').should('have.class', 'pf-m-toggle-right');
    cy.get('.pf-v5-c-card__header-toggle .pf-v5-c-button').click();
    cy.get('#expand-card').should('have.class', 'pf-m-expanded');
  });

  it.skip('Verify new selectable card can be selected', () => {
    cy.get('#selectable-card-example-1 #selectable-card-input-1').should('not.be.checked');
    cy.get('#selectable-card-example-2 #selectable-card-input-2').should('not.be.checked');
    cy.get('#selectable-card-example-1').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#selectable-card-input-1').should('be.checked');
      cy.get('#selectable-card-example-2 #selectable-card-input-2').should('not.be.checked');
    });
    cy.get('#selectable-card-example-2').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#selectable-card-input-2').should('be.checked');
      cy.get('#selectable-card-example-1 #selectable-card-input-1').should('be.checked');
    });
  });

  it.skip('Verify new single selectable card can be selected', () => {
    cy.get('#single-selectable-card-example-1 #single-selectable-card-input-1').should('not.be.checked');
    cy.get('#single-selectable-card-example-2 #single-selectable-card-input-2').should('not.be.checked');
    cy.get('#single-selectable-card-example-1').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#single-selectable-card-input-1').should('be.checked');
      cy.get('#single-selectable-card-example-2 #single-selectable-card-input-2').should('not.be.checked');
    });
    cy.get('#single-selectable-card-example-2').then(($card) => {
      cy.wrap($card).click();
      cy.wrap($card).get('#single-selectable-card-input-2').should('be.checked');
      cy.get('#single-selectable-card-example-1 #single-selectable-card-input-1').should('not.be.checked');
    });
  });
});
