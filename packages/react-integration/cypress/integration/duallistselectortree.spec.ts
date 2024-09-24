describe('Dual List Selector Tree Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dual-list-selector-tree-demo-nav-link');
  });

  it('Verify existence', () => {
    cy.get('.pf-v6-c-dual-list-selector').should('exist');
  });

  it('Verify expanding options', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 3);
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-v6-c-dual-list-selector__item-toggle').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__list-item').eq(0).should('have.class', 'pf-m-expanded');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 6);
  });

  it('Verify available search works', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 6);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(0).type('bre');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(0).type('{backspace}{backspace}{backspace}');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 3);
  });

  it('Verify checkbox selects an option', () => {
    cy.get('.pf-v6-c-dual-list-selector__controls-item button').eq(0).should('have.attr', 'disabled');
    cy.get('.pf-v6-c-dual-list-selector__list-item .pf-v6-c-dual-list-selector__item-check').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__controls-item button').eq(0).should('not.have.attr', 'disabled');
    cy.get('.pf-v6-c-dual-list-selector__controls-item button').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 2);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 2);
  });

  xit('Verify add all filtered options works', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 2);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(0).type('Fru');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 3);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(0).type('{backspace}{backspace}{backspace}');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
  });

  it('Verify chosen search works', () => {
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(1).click();
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(1).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(1).type('Pro');
    cy.get('.pf-v6-c-dual-list-selector__item-toggle').eq(0).click();
    cy.get('.pf-v6-c-dual-list-selector__menu').eq(1).find('li').should('have.length', 1);
  });

  xit('Verify remove all filtered options works', () => {
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 0);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(2).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 1);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 0);
    cy.get('.pf-v6-c-dual-list-selector__tools-filter input').eq(1).type('{backspace}{backspace}{backspace}');
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 3);
    cy.get('.pf-v6-c-dual-list-selector__controls-item').eq(2).click();
    cy.get('.pf-v6-c-dual-list-selector__list').eq(0).find('li').should('have.length', 4);
    cy.get('.pf-v6-c-dual-list-selector__list').eq(1).find('li').should('have.length', 0);
  });
});
