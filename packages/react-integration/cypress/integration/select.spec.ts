describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-demo-nav-link');
  });

  it('Verify Select with Divider', () => {
    cy.get('#single-select-with-divider').click();
    cy.get('#Miss > .pf-c-select__menu-item').click();
    cy.get('#single-select-with-divider')
      .contains('Miss')
      .should('exist');

    cy.get('#single-select-with-divider').click();
    cy.get('#Mr > .pf-c-select__menu-item').click();
    cy.get('#single-select-with-divider')
      .contains('Mr')
      .should('exist');
  });

  it('Verify Typeahead Select with labels', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-labels-id')
        .parent()
        .find(selector);
    find('button.pf-c-select__toggle-button').click();
    find('li:nth-child(3) button').click();
    find('#typeahead-select-label-select-typeahead').should('have.value', 'Florida');
    find('button.pf-c-select__toggle-clear:first').click();
    find('#typeahead-select-label-select-typeahead').should('have.value', '');
    cy.get('#button-typeahead-labels').click();
    find('#typeahead-select-label-select-typeahead').should('have.value', 'New York');
    find('button.pf-c-select__toggle-clear:first').click();
    find('#typeahead-select-label-select-typeahead').should('have.value', '');
  });

  it('Verify Single Select', () => {
    cy.get('#single-select').click();
    cy.get('#Miss > .pf-c-select__menu-item').click();
    cy.get('#single-select')
      .contains('Miss')
      .should('exist');
  });

  it('Verify Description Select', () => {
    cy.get('#single-select-with-descriptions').click();
    cy.get('.pf-c-select__menu-footer').should('exist');
    cy.get('#Miss > .pf-c-select__menu-item > .pf-c-select__menu-item-description').click();
    cy.get('#single-select-with-descriptions')
      .contains('Miss')
      .should('exist');
  });

  it('Verify Disabled Single Select', () => {
    cy.get('#disabled-single-select').should('be.disabled');
  });

  it('Verify Custom Single Select', () => {
    cy.get('#custom-select').click();
    cy.get('#Miss > .pf-c-select__menu-item').click();
    cy.get('#custom-select')
      .contains('text-Miss')
      .should('exist');
  });

  it('Verify Typeahead Select', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-id')
        .parent()
        .find(selector);
    find('button.pf-c-select__toggle-button').click();
    find('#Alabama > .pf-c-select__menu-item > .pf-c-select__menu-item-row > .pf-c-select__menu-item-count').should(
      'exist'
    );
    find('li:nth-child(3) button').click();
    find('#typeahead-select-select-typeahead').should('have.value', 'Florida');
    find('button.pf-c-select__toggle-clear:first').click();
    find('#typeahead-select-select-typeahead').should('have.value', '');
  });

  it('Verify Typeahead Select updates after disabled state change', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-id')
        .parent()
        .find(selector);
    find('button.pf-c-select__toggle-button').click();
    find('#Alabama button').should('not.be.disabled');
    find('button.pf-c-select__toggle-button').click();
    cy.get('#disabled-toggle-btn').click();
    find('button.pf-c-select__toggle-button').click();
    find('#Alabama button').should('have.class', 'pf-m-disabled');
  });

  it('Verify Non-Creatable Typeahead selection', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-id')
        .parent()
        .find(selector);
    find('#typeahead-select').click();
    find('#typeahead-select-select-typeahead').should('have.value', '');
    find('input:nth-child(1)').type('Flo');
    find('#typeahead-select-select-typeahead').should('have.value', 'Flo');
    find('#typeahead-select-select-typeahead').trigger('keydown', { keyCode: 40 });
    find('#typeahead-select-select-typeahead').trigger('keydown', { keyCode: 13 });
    find('#typeahead-select-select-typeahead').should('have.value', 'Florida');
    find('button.pf-c-select__toggle-clear:first').click();
    find('#typeahead-select-select-typeahead').should('have.value', '');
  });

  it('Verify Non-Creatable Typeahead selection which does not exist', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-id')
        .parent()
        .find(selector);
    find('#typeahead-select').click();
    find('#typeahead-select-select-typeahead').should('have.value', '');
    find('input:nth-child(1)').type('Unknown');
    find('#typeahead-select-select-typeahead').should('have.value', 'Unknown');
    find('#typeahead-select-select-typeahead').type('{esc}');
    find('#typeahead-select-select-typeahead').should('have.value', '');
  });

  it('Verify isInputValuePersisted works', () => {
    const find = (selector: string) =>
      cy
        .get('#typeahead-select-id')
        .parent()
        .find(selector);
    find('#typeahead-select-select-typeahead').type('zzz');
    cy.get('.pf-c-title')
      .eq(0)
      .click();
    find('#typeahead-select-select-typeahead').should('have.value', '');
    cy.get('#toggle-input-value-persisted').click();
    find('#typeahead-select-select-typeahead').type('zzz');
    cy.get('.pf-c-title')
      .eq(0)
      .click();
    find('#typeahead-select-select-typeahead').should('have.value', 'zzz');
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

  it('Verify false value of shouldResetOnSelect will not clear typeahead input after selection', () => {
    cy.get('#typeahead-multi-select').click();
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').should('contain.value', '');
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').type('Florida');
    cy.get('#Florida').click();
    cy.get('.pf-c-chip')
      .contains('Florida')
      .should('exist');
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').should('contain.value', 'Florida');
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
    cy.get('.pf-c-divider').should('exist');
    cy.get('input#Cancelled').click();
    cy.get('#check-select')
      .contains('1')
      .should('exist');
    cy.get('#check-select .pf-c-select__toggle-badge').should('exist');
    cy.get('input#Paused').click();
    cy.get('#check-select')
      .contains('2')
      .should('exist');
    cy.get('#check-select').click();
    cy.get('.pf-c-select__menu').should('not.exist');
  });

  it('Verify No Badge Checkbox Select', () => {
    cy.get('#check-select-no-badge').click();
    cy.get('input#Cancelled').click();
    cy.get('#check-select-no-badge .pf-c-select__toggle-badge').should('not.exist');
  });

  it('Verify Typeahead Select inside Form', () => {
    cy.get('#form-typeahead-button').click();
    cy.url().should('match', /select-demo-nav-link/);
  });

  it('Verify Checkbox Select on document body', () => {
    cy.get('#select-document-body-toggle').click();
    cy.get('input#Active').click();
    cy.get('#select-document-body-toggle')
      .contains('1')
      .should('exist');
    cy.get('#select-document-body-toggle .pf-c-select__toggle-badge').should('exist');
    cy.get('input#Cancelled').click();
    cy.get('#select-document-body-toggle')
      .contains('2')
      .should('exist');
    cy.get('#select-document-body-toggle').click();
    cy.get('.pf-c-select__menu').should('not.exist');
  });

  it('Verify click on footer with menuAppendTo will not close select', () => {
    cy.get('#menuappend-toggle').click();
    cy.get('#footer-btn').click();
    cy.get('#Miss > .pf-c-select__menu-item').should('exist');
    cy.get('#Miss > .pf-c-select__menu-item').click();
    cy.get('#menuappend-toggle')
      .contains('Miss')
      .should('exist');
  });
});
