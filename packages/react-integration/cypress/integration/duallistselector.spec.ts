describe('Dual List Selector Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dual-list-selector-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/dual-list-selector-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-c-dual-list-selector').should('exist');
  });

  it('Verify default value content', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .first()
      .should('have.value', '');
    cy.get('.pf-c-dual-list-selector__list li').should('have.length', 4);
  });

  it('Verify selecting options', () => {
    cy.get('.pf-c-dual-list-selector__list-item.pf-m-selected').should('not.exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item.pf-m-selected').should('exist');
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item.pf-m-selected').should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item.pf-m-selected').should('have.length', 1);
  });

  it('Verify selecting and choosing options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 2);
  });

  it('Verify removing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(3)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
  });

  it('Verify choosing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 4);
  });

  it('Verify sort works', () => {
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__list-item')
      .first()
      .contains('Option 2');
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__tools-actions button')
      .first()
      .click();
    cy.get('.pf-m-chosen .pf-c-dual-list-selector__list-item')
      .first()
      .contains('Option 1');
  });

  it('Verify chosen search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__tools-filter .pf-m-search')
      .eq(1)
      .type('Option 1');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
  });

  it('Verify removing all options', () => {
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(3)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
  });

  it('Verify available search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__tools-filter .pf-m-search')
      .eq(0)
      .type('Option 3');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
  });
});
