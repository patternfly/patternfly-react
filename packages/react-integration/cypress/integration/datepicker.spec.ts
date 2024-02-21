it('Navigate to demo section', () => {
  cy.visit('http://localhost:3000/date-picker-demo-nav-link');
});

// TODO: Reenable with issue  #8457
xit('Verify validation error can be cleared from outside', () => {
  cy.get('#date-picker-validator > .pf-v6-c-date-picker')
    .children()
    .within(() => {
      cy.get('input');
    })
    .children()
    .click();
  cy.focused().clear().type('2020-03-16');
  cy.focused().blur();
  cy.get('div.pf-m-error').should('exist');
  cy.get('button').contains('Set date').click();
  cy.get('div.pf-m-error').should('not.exist');
});

it('Verify error can be cleared when resetting the date from outside', () => {
  cy.get('#date-picker-clear .pf-v6-c-form-control input').click();
  cy.focused().clear().type('something invalid');
  cy.focused().blur();
  cy.get('div.pf-m-error').should('exist');
  cy.get('button').contains('Clear date').click();
  cy.get('div.pf-m-error').should('not.exist');
});

it('Verify calendar state can be controlled', () => {
  cy.get('#date-picker-controlled .pf-v6-c-popover').should('not.exist');
  cy.get('button').contains('Toggle').click();
  cy.get('#date-picker-controlled .pf-v6-c-popover').should('exist');
  cy.get('button').contains('Toggle').click();
  cy.get('#date-picker-controlled .pf-v6-c-popover').should('not.exist');
});
