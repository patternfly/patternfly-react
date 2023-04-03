it('Navigate to demo section', () => {
  cy.visit('http://localhost:3000/date-picker-demo-nav-link');
});

// TODO: Reenable with issue  #8457
xit('Verify validation error can be cleared from outside', () => {
  cy.get('.pf-c-date-picker')
    .children()
    .within(() => {
      cy.get('input');
    })
    .children()
    .click();
  cy.focused()
    .clear()
    .type('2020-03-16');
  cy.focused().blur();
  cy.get('div.pf-m-error').should('exist');
  cy.get('button')
    .contains('Set date')
    .click();
  cy.get('div.pf-m-error').should('not.exist');
});
