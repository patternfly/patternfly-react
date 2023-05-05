describe('Menu Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/menu-demo-nav-link');
  });

  it('Verify Basic Menu', () => {
    cy.get('#default-link2').then((defaultLink2: JQuery<HTMLAnchorElement>) => {
      cy.wrap(defaultLink2).click();
      cy.url().should('eq', 'http://localhost:3000/menu-demo-nav-link#default-link2');
    });
  });

  it('Verify Icons Menu', () => {
    cy.get('#menu-with-icons.pf-v5-c-menu').should('exist');

    cy.get('.pf-v5-c-menu__item-icon > svg').eq(0).should('have.attr', 'id', 'code-branch-icon');

    cy.get('.pf-v5-c-menu__item-icon > svg').eq(1).should('have.attr', 'id', 'layer-group-icon');

    cy.get('.pf-v5-c-menu__item-icon > svg').eq(2).should('have.attr', 'id', 'cube-icon');
  });

  it.skip('Verify Flyout Menu', () => {
    cy.get('.pf-v5-c-menu.pf-m-flyout').should('exist');

    cy.get('#edit').click();
  });

  it('Verify Filterable Menu', () => {
    cy.get('#filterable-menu.pf-v5-c-menu > div').first().should('have.class', 'pf-v5-c-menu__search');

    cy.get('.pf-v5-c-text-input-group__text-input').type('Action 1');

    cy.get('#filtered-items-0').last().should('contain', 'Action 1');
    cy.get('#filtered-items-0').children().should('not.contain', 'Action 2');
  });

  it('Verify Menu with Links', () => {
    cy.get('#links-menu-link-1').should('have.attr', 'href', '#default-link1');
    cy.get('#links-menu-link-2').should('have.attr', 'href', '#default-link2');
    cy.get('#links-menu-link-3').should('have.attr', 'href', '#default-link3');
  });

  it('Verify Menu with Separator', () => {
    cy.get('#menu-with-separators.pf-v5-c-menu > ul > li').eq(2).should('have.attr', 'id', 'separator');
  });

  it('Verify Menu with Titled Groups', () => {
    cy.get('#group-1.pf-c-menu__group > h1').should('contain', 'Group 1');
    cy.get('#group-2.pf-c-menu__group > h1').should('contain', 'Group 2');
    cy.get('#group-3.pf-c-menu__group > div > h1').should('contain', 'Group 3');
    cy.get('#group-4.pf-c-menu__group > div > h1.my-awesome-style').should('contain', 'Group 4');
  });

  it('Verify Menu with Description', () => {
    cy.get('#description-item-1').last().should('contain', 'Description');
  });

  it('Verify Menu with Actions', () => {
    cy.get('#actions-list.pf-v5-c-menu__list > li > button').last().should('have.class', 'pf-v5-c-menu__item-action');
  });

  it('Verify Menu with Favorites', () => {
    cy.get('.pf-v5-c-menu__item-action.pf-m-favorite').first().click();

    cy.get('#favorites-menu.pf-v5-c-menu > section').first().should('contain', 'Favorites');
  });

  it('Verify Single Select Menu', () => {
    cy.get('#single-select-menu.pf-v5-c-menu').should('exist');

    cy.get('#single-select-item-2').click();

    cy.get('#single-select-item-3').click().should('have.class', 'pf-m-selected');

    cy.get('#single-select-item-1').should('not.have.class', 'pf-m-selected');
  });

  it('Verify Multi Select Menu', () => {
    cy.get('#multi-select-menu.pf-v5-c-menu').should('exist');

    cy.get('#multi-select-item-1').should('have.class', 'pf-m-selected');

    cy.get('#multi-select-item-2').click().should('have.class', 'pf-m-selected');

    cy.get('#multi-select-item-3').should('have.class', 'pf-m-selected');
  });

  it('Verify Footer Menu', () => {
    cy.get('#menu-footer.pf-v5-c-menu').should('exist');

    cy.get('#menu-footer .pf-v5-c-menu__footer').should('exist');
  });

  it('Verify View More Menu', () => {
    cy.get('#menu-view-more.pf-v5-c-menu').should('exist');

    cy.get('#menu-view-more .pf-v5-c-menu__list').find('.pf-v5-c-menu__list-item').should('have.length', 4);

    cy.get('#menu-view-more .pf-v5-c-menu__list-item').last().should('have.text', 'View more').click();

    cy.get('#menu-view-more .pf-v5-c-menu__list').find('.pf-v5-c-menu__list-item').should('have.length', 7);
  });

  it('Navigate to drilldown demo section', () => {
    cy.visit('http://localhost:3000/menu-drilldown-demo-nav-link');
  });

  // it('Verify Drilldown Menu', () => {
  //   cy.get('#drilldownMenuStart').should('not.be.visible');
  //   cy.get('#start').click();
  //   cy.get('#drilldownMenuStart > :nth-child(1) > :nth-child(1)').should('be.visible');
  //   cy.get('#app-group-start').click();
  // });
});
