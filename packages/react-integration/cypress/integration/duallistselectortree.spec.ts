describe('Dual List Selector TreeDemo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-tree-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-c-dual-list-selector').should('exist');
  });

  it('Verify expanding options', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__list-item .pf-c-dual-list-selector__item-toggle')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list-item')
      .eq(0)
      .should('have.class', 'pf-m-expanded');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
  });

  it('Verify available search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 4);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('Option 2');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}');
    cy.get('.pf-c-dual-list-selector__list-item .pf-c-dual-list-selector__item-toggle')
      .last()
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 5);
  });

  it('Verify checkbox selects an option', () => {
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__list-item .pf-c-dual-list-selector__item-check')
      .last()
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .should('not.have.attr', 'disabled');
    cy.get('.pf-c-dual-list-selector__list-item .pf-c-dual-list-selector__item-check')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__controls-item button')
      .eq(0)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(2)
      .find('li')
      .should('have.length', 2);
  });

  it('Verify add all filtered options works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('Option 1');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(1)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(0)
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
  });

  it('Verify chosen search works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(1)
      .type('Option 1');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
  });

  it('Verify remove all filtered options works', () => {
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 1);
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(2)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
    cy.get('.pf-c-dual-list-selector__tools-filter input')
      .eq(1)
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}');
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 2);
    cy.get('.pf-c-dual-list-selector__controls-item')
      .eq(2)
      .click();
    cy.get('.pf-c-dual-list-selector__list')
      .eq(0)
      .find('li')
      .should('have.length', 3);
    cy.get('.pf-c-dual-list-selector__list')
      .eq(1)
      .find('li')
      .should('have.length', 0);
  });
});
