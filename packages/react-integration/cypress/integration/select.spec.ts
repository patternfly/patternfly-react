describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#select-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/select-demo-nav-link');
  });

  it('Verify Single Select', () => {
    cy.get('#single-select').click();
    cy.get('#Miss-2').click();
    cy.get('#single-select')
      .contains('Miss')
      .should('exist');
  });

  it('Verify Disabled Single Select', () => {
    cy.get('#disabled-single-select').should('be.disabled');
  });

  it('Verify Custom Single Select', () => {
    cy.get('#custom-select').click();
    cy.get('#Miss-2').click();
    cy.get('#custom-select')
      .contains('text-Miss')
      .should('exist');
  });

  xit('Verify Typeahead Select', () => {
    cy.get('#typeahead-select').click();
    cy.get('#Florida-2').click();
    cy.get('#select-typeahead').should('have.value', 'Florida');
    cy.get('button.pf-c-select__toggle-clear').click();
    cy.get('#select-typeahead').should('have.value', '');
  });

  xit('Verify Creatable Typeahead Select', () => {
    cy.get('#toggle-creatable-typeahead').click();
    cy.get('#toggle-new-typeahead').click();
    cy.get('#typeahead-select').click();
    cy.get(':nth-child(5) > :nth-child(2) > .pf-c-select > .pf-c-select__toggle input').type('Al');
    cy.get('#Al-1').click();
    cy.get('#select-typeahead').should('have.value', 'Al');
    cy.get('#typeahead-select').click();
    cy.get('#Al-5').should('exist');
    cy.get('button.pf-c-select__toggle-clear').click();
  });

  xit('Verify Typeahead Multi Select', () => {
    cy.get('#typeahead-multi-select').click();
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('Florida')
      .should('exist');
    cy.get('#Alabama-0').click();
    cy.get('#Boston-1').click();
    cy.get('#Texas-4').click();
    cy.get('.pf-m-overflow > .pf-c-button').should('exist');
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('Alabama')
      .should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').should('not.exist');
    cy.get('#Florida-2').click();
    cy.get('.pf-m-overflow > .pf-c-button').should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').click();
    cy.get('.pf-c-chip')
      .contains('Florida')
      .should('exist');
    cy.get('.pf-c-chip')
      .contains('Alabama')
      .should('exist');
    cy.get('.pf-c-chip')
      .contains('.pf-c-chip', 'Florida')
      .children('button')
      .click();
    cy.get('.pf-c-chip')
      .contains('Florida')
      .should('not.exist');
    cy.get('button.pf-c-select__toggle-clear').click();
    cy.get('.pf-c-chip').should('not.exist');
  });

  xit('Verify Custom Typeahead Multi Select', () => {
    cy.get('#custom-typeahead-multi-select').click();
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('div-Florida-test_span')
      .should('exist');
    cy.get('#Alabama-0').click();
    cy.get('#Boston-1').click();
    cy.get('#Texas-4').click();
    cy.get('button.pf-c-select__toggle-clear').should('exist');
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('div-Alabama-test_span')
      .should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').should('not.exist');
    cy.get('button.pf-c-select__toggle-clear').click();
  });

  xit('Verify Custom Typeahead Plain Multi Select', () => {
    cy.get('#custom-typeahead-plain-multi-select').click();
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('div-Florida-test_span')
      .should('exist');
    cy.get('#Alabama-0').click();
    cy.get('#Boston-1').click();
    cy.get('#Texas-4').click();
    cy.get('button.pf-c-select__toggle-clear').should('exist');
    cy.get('#Florida-2').click();
    cy.get('.pf-c-chip')
      .contains('div-Alabama-test_span')
      .should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').should('not.exist');
  });

  it('Verify Checkbox Select', () => {
    cy.get('#check-select').click();
    cy.get('input#Active').click();
    cy.get('#check-select')
      .contains('1')
      .should('exist');
    cy.get('#check-select .pf-c-select__toggle-badge').should('exist');
    cy.get('input#Cancelled').click();
    cy.get('#check-select')
      .contains('2')
      .should('exist');
    cy.get('#check-select').click();
    cy.get('.pf-c-select__menu').should('not.exist');
  });

  it('Verify No Badge Checkbox Select', () => {
    cy.get('#check-select-no-badge').click();
    cy.get('input#Active').click();
    cy.get('#check-select-no-badge .pf-c-select__toggle-badge').should('not.exist');
  });

  it('Verify Typeahead Select inside Form', () => {
    cy.get('#form-typeahead-button').click();
    cy.url().should('match', /select-demo-nav-link/);
  });
});
