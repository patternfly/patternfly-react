describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#select-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/select-demo-nav-link');
  });

  it('Verify Single Select', () => {
    cy.get('#single-select').click();
    cy.get('#Miss-2').click();
    cy.get('#single-select').contains('Miss').should('exist');
  });

  it('Verify Custom Single Select', () => {
    cy.get('#custom-select').click();
    cy.get('#Miss-2').click();
    cy.get('#custom-select').contains('text-Miss').should('exist');
  });

  it('Verify Checkbox Select', () => {
    cy.get('#check-select').click();
    cy.get('.pf-c-form__fieldset > :nth-child(1)').click();
    cy.get('#check-select').contains('1').should('exist');
    cy.get('.pf-c-form__fieldset > :nth-child(2)').click();
    cy.get('#check-select').contains('2').should('exist');
    cy.get('.pf-c-form__fieldset > :nth-child(1)').click();
    cy.get('#check-select').contains('1').should('exist');
    cy.get('#check-select').click();
    cy.get('.pf-c-select__menu').should('not.exist');
  });

  it('Verify Typeahead Select', () => {
    cy.get('#typeahead-select').click();
    cy.get('#Florida-1').click();
    cy.get('#select-typeahead').should('have.value', 'Florida');
    cy.get('.pf-c-select__toggle > .pf-m-plain').click();
    cy.get('#select-typeahead').should('have.value', '');
  });

  it('Verify Typeahead Multi Select', () => {
    cy.get('#typeahead-multi-select').click();
    cy.get('#Florida-1').click();
    cy.get('.pf-c-chip').contains('Florida').should('exist');
    cy.get('#Alabama-0').click();
    cy.get('.pf-m-overflow > .pf-c-button').should('exist');
    cy.get('#Florida-1').click();
    cy.get('.pf-c-chip').contains('Alabama').should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').should('not.exist');
    cy.get('#Florida-1').click();
    cy.get('.pf-m-overflow > .pf-c-button').should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').click();
    cy.get('.pf-c-chip').contains('Florida').should('exist');
    cy.get('.pf-c-chip').contains('Alabama').should('exist');
    cy.get('.pf-c-chip').contains('.pf-c-chip', 'Florida').children('button').click();
    cy.get('.pf-c-chip').contains('Florida').should('not.exist');
    cy.get('.pf-c-select__toggle > .pf-m-plain').click();
    cy.get('.pf-c-chip').should('not.exist');
  });

  it('Verify Custom Typeahead Multi Select', () => {
    cy.get('#custom-typeahead-multi-select').click();
    cy.get('#Florida-1').click();
    cy.get('.pf-c-chip').contains('div-Florida-test_span').should('exist');
    cy.get('#Alabama-0').click();
    cy.get('.pf-m-overflow > .pf-c-button').should('exist');
    cy.get('#Florida-1').click();
    cy.get('.pf-c-chip').contains('div-Alabama-test_span').should('exist');
    cy.get('.pf-m-overflow > .pf-c-button').should('not.exist');
  });
});
