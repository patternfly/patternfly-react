describe('Table Selectable Expandable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-selectable-expandable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-selectable-expandable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Selectable expandable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 5);
  });

  it('Checks that initially checked inputs carry checked property', () => {
    cy.get('.pf-c-table')
      .find('[name="checkrow0"]')
      .should('have.prop', 'checked')
  });

  // this test fails, it seems the javascript "checked" property is correct, but the DOM
  // attribute is left as is set initially - test by comparing with document.querySelectorAll('[name="checkrow0"]')[0].checked
  // it('Checks that unchecking inputs correctly toggles checked property', () => {
  //   cy.get('.pf-c-table')
  //     .find('[name="checkrow0"]')
  //     .click()
  //     .should('not.have.prop', 'checked');
  // });

  // this test fails, it seems the javascript "indeterminate" property doesn't get
  // set until the user interacts with one of the other checkboxes
  // it('Checks that check all checkbox is indeterminate', () => {
  //   cy.get('.pf-c-table')
  //     .find('[name="check-all"]')
  //     .should('have.prop', 'indeterminate', true)
  // });


  it('Checks that check all checkbox is indeterminate', () => {
    // if you manually toggle one of the other inputs,
    // you'll see the checkall checkbox then receives the correct prop
    cy.get('.pf-c-table')
      .find('[name="checkrow0"]')
      .click()
      .click();

    cy.get('.pf-c-table')
      .find('[name="check-all"]')
      .should('have.prop', 'indeterminate', true)
  });

});
