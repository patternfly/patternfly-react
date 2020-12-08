xdescribe('Menu Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#menu-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/menu-demo-nav-link');
  });

  it('Verify Basic Menu', () => {
    cy.get('#default-link2').then((defaultLink2: JQuery<HTMLAnchorElement>) => {
      cy.wrap(defaultLink2).click();
      cy.url().should('eq', 'http://localhost:3000/menu-demo-nav-link#default-link2');
    });
  });

  it('Verify Icons Menu', () => {
    cy.get('#menu-with-icons.pf-c-menu').should('exist');

    cy.get('.pf-c-menu__item-icon > svg')
      .eq(0)
      .should('have.attr', 'id', 'code-branch-icon');

    cy.get('.pf-c-menu__item-icon > svg')
      .eq(1)
      .should('have.attr', 'id', 'layer-group-icon');

    cy.get('.pf-c-menu__item-icon > svg')
      .eq(2)
      .should('have.attr', 'id', 'cube-icon');
  });

  it('Verify Flyout Menu', () => {
    cy.get('.pf-c-menu.pf-m-flyout').should('exist');

    cy.get('#edit.pf-c-menu__list-item > button').click();
  });

  it('Verify Filterable Menu', () => {
    cy.get('#filterable-menu.pf-c-menu > div')
      .first()
      .should('have.class', 'pf-c-menu__search');

    cy.get('.pf-c-search-input__text-input').type('Action 1');

    cy.get('#filtered-items.pf-c-menu__list-item')
      .last()
      .should('contain', 'Action 1');
    cy.get('#filtered-items.pf-c-menu__list-item')
      .children()
      .should('not.contain', 'Action 2');
  });

  it('Verify Menu with Links', () => {
    cy.get('#links-menu-link-1.pf-c-menu__list-item > a').should('have.attr', 'href', '#default-link1');
    cy.get('#links-menu-link-2.pf-c-menu__list-item > a').should('have.attr', 'href', '#default-link2');
    cy.get('#links-menu-link-3.pf-c-menu__list-item > a').should('have.attr', 'href', '#default-link3');
  });

  it('Verify Menu with Separator', () => {
    cy.get('#menu-with-separators.pf-c-menu > div > ul > li')
      .eq(2)
      .should('have.attr', 'id', 'separator');
  });

  it('Verify Menu with Titled Groups', () => {
    cy.get('#group-1.pf-c-menu__group > h1').should('contain', 'Group 1');
    cy.get('#group-2.pf-c-menu__group > h1').should('contain', 'Group 2');
  });

  it('Verify Menu with Description', () => {
    cy.get('#description-item-1.pf-c-menu__list-item > button > div')
      .last()
      .should('contain', 'Description');
  });

  it('Verify Menu with Actions', () => {
    cy.get('#actions-list.pf-c-menu__list > li > button')
      .last()
      .should('have.class', 'pf-c-menu__item-action');
  });

  it('Verify Menu with Favorites', () => {
    cy.get('.pf-c-menu__item-action.pf-m-favorite')
      .first()
      .click();

    cy.get('#favorites-menu.pf-c-menu > div > section')
      .first()
      .should('contain', 'Favorites');
  });

  it('Verify Single Select Menu', () => {
    cy.get('#single-select-menu.pf-c-menu').should('exist');

    cy.get('#single-select-item-2.pf-c-menu__list-item > button').click();

    cy.get('#single-select-item-3.pf-c-menu__list-item > button')
      .click()
      .should('have.class', 'pf-m-selected');

    cy.get('#single-select-item-1.pf-c-menu__list-item > button').should('not.have.class', 'pf-m-selected');
  });

  it('Verify Multi Select Menu', () => {
    cy.get('#multi-select-menu.pf-c-menu').should('exist');

    cy.get('#multi-select-item-1.pf-c-menu__list-item > button').should('have.class', 'pf-m-selected');

    cy.get('#multi-select-item-2.pf-c-menu__list-item > button')
      .click()
      .should('have.class', 'pf-m-selected');

    cy.get('#multi-select-item-3.pf-c-menu__list-item > button').should('have.class', 'pf-m-selected');
  });
});
