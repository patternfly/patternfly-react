describe('Search Input Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/search-input-demo-nav-link');
  });

  it('Verify search input ref by clicking focus button', () => {
    cy.get('#focus_button')
      .first()
      .click();
    cy.focused().should('have.attr', 'placeholder', 'Find by name');
    cy.focused().blur();
  });

  it('Disabled search input is disabled', () => {
    cy.get('#disabled-search .pf-c-search-input__text-input').should('be.disabled');
    cy.get('#disabled-search.pf-c-search-input button')
      .eq(0)
      .should('be.disabled');
    cy.get('#disabled-search.pf-c-search-input button')
      .eq(1)
      .should('be.disabled');
  });

  it('Verify search input with hint', () => {
    cy.get('#hinted-search .pf-c-search-input__text-input').should('have.length', 2);
    const hint = cy.get('#hinted-search .pf-c-search-input__text-input').eq(0);
    hint.should('be.disabled');
    hint.should('have.class', 'pf-m-hint');
    hint.should('have.value', 'hint');
    cy.get('#hinted-search .pf-c-search-input__text-input')
      .eq(1)
      .should('not.be.disabled');
  });

  it('Verify search input and its handlers work', () => {
    cy.get('#enabled-search .pf-c-search-input__count').should('not.exist');
    cy.get('#enabled-search .pf-c-search-input__clear').should('not.exist');
    cy.get('#enabled-search .pf-c-search-input__nav').should('not.exist');

    cy.get('#enabled-search .pf-c-search-input__text-input').type('Hello world');
    cy.get('#enabled-search .pf-c-search-input__text-input').should('have.value', 'Hello world');

    cy.get('#enabled-search .pf-c-search-input__count').should('be.visible');
    cy.get('#enabled-search .pf-c-search-input__clear').should('be.visible');
    cy.get('#enabled-search .pf-c-search-input__nav').should('be.visible');

    cy.get('#enabled-search .pf-c-badge').should('have.text', '1 / 3');
    cy.get('#enabled-search .pf-c-search-input__nav button')
      .last()
      .click();
    cy.get('#enabled-search .pf-c-badge').should('have.text', '2 / 3');
    cy.get('#enabled-search .pf-c-search-input__nav button')
      .first()
      .click();
    cy.get('#enabled-search .pf-c-badge').should('have.text', '1 / 3');

    cy.get('#enabled-search .pf-c-search-input__clear').click();
    cy.get('#enabled-search .pf-c-search-input__text-input').should('not.have.value', 'Hello world');

    cy.get('#enabled-search .pf-c-search-input__count').should('not.exist');
    cy.get('#enabled-search .pf-c-search-input__clear').should('not.exist');
    cy.get('#enabled-search .pf-c-search-input__nav').should('not.exist');
  });

  it('Verify advanced search and its handlers work', () => {
    cy.get('#enabled-search .pf-c-search-input__menu').should('not.exist');
    cy.get('#enabled-search.pf-c-search-input button')
      .eq(0)
      .click();
    cy.get('#enabled-search .pf-c-search-input__menu').should('be.visible');

    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(0)
      .type('test');
    cy.get('#enabled-search .pf-c-search-input__text-input').should('have.value', 'username:test');

    cy.get('#enabled-search .pf-c-search-input__text-input').type(' firstname:hi another test');
    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(1)
      .should('have.value', 'hi');
    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(2)
      .should('have.value', 'another test');

    cy.get('#enabled-search .pf-c-form__actions button')
      .eq(1)
      .click();
    cy.get('#enabled-search .pf-c-search-input__text-input').should('have.value', '');
    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(1)
      .should('have.value', '');
    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(2)
      .should('have.value', '');

    cy.get('#enabled-search .pf-c-search-input__menu input')
      .eq(0)
      .type('test');
    cy.get('#enabled-search .pf-c-form__actions button')
      .eq(0)
      .click();
    cy.get('#enabled-search .pf-c-search-input__menu').should('not.exist');
    cy.get('#enabled-search .pf-c-search-input__text-input').should('have.value', 'username:test');
  });
});
