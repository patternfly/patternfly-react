describe('Pagination Demo Test', () => {
  it('Navigate to Pagination section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#pagination-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/pagination-demo-nav-link');
  });

  it('Verify initial state', () => {
    cy.get('.pf-c-pagination').should('have.length', 2);
    cy.get('#pagination-options-menu-bottom.pf-c-pagination.pf-m-footer').should('exist');
    cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
      .then(toggleText => expect(toggleText).to.have.text('1 - 20 of 523 items'));

    cy.get('#pagination-options-menu-top').find('button[data-action="first"]')
      .then(button => expect(button).to.be.disabled);
    cy.get('#pagination-options-menu-top').find('button[data-action="previous"]')
      .then(button => expect(button).to.be.disabled);
    cy.get('#pagination-options-menu-top').find('button[data-action="next"]')
      .then(button => expect(button).not.to.be.disabled);
    cy.get('#pagination-options-menu-top').find('button[data-action="last"]')
      .then(button => expect(button).not.to.be.disabled);

    cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select input')
      .then(input => expect(input).to.have.value('1'));
    cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select')
      .then(navPageSelect => expect(navPageSelect).to.have.text('of 27 pages'));
  });

  it('Verify event handlers fire correctly', () => {
    cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle button')
      .then((toggleButton: JQuery<HTMLButtonElement>) => {
        cy.wrap(toggleButton).click();
        cy.get('.pf-c-dropdown.pf-m-expanded').should('exist');
        cy.get('button[data-action="per-page-10"]')
          .then((firstMenuItem: JQuery<HTMLButtonElement>) => {
            cy.wrap(firstMenuItem).click();
            cy.get('.pf-c-dropdown.pf-m-expanded').should('not.exist');
            cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
              .then(toggleText => expect(toggleText).to.have.text('1 - 10 of 523 items'));
            cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select')
              .then(navPageSelect => expect(navPageSelect).to.have.text('of 53 pages'));

            cy.get('#pagination-options-menu-bottom').find('.pf-c-options-menu__toggle-text')
              .then(toggleText => expect(toggleText).to.have.text('1 - 10 of 523 items'));
            cy.get('#pagination-options-menu-bottom').find('.pf-c-pagination__nav-page-select')
              .then(navPageSelect => expect(navPageSelect).to.have.text('of 53 pages'));
          });
      });

    cy.get('#pagination-options-menu-top').find('button[data-action="next"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('#pagination-options-menu-top').find('button[data-action="first"]')
          .then(firstButton => expect(firstButton).not.to.be.disabled);
        cy.get('#pagination-options-menu-top').find('button[data-action="previous"]')
          .then(previousButton => expect(previousButton).not.to.be.disabled);
        cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
          .then(toggleText => expect(toggleText).to.have.text('11 - 20 of 523 items'));
        cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select input')
          .then(input => expect(input).to.have.value('2'));
      });

    cy.get('#pagination-options-menu-bottom').find('button[data-action="next"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('#pagination-options-menu-bottom').find('button[data-action="first"]')
          .then(firstButton => expect(firstButton).not.to.be.disabled);
        cy.get('#pagination-options-menu-bottom').find('button[data-action="previous"]')
          .then(previousButton => expect(previousButton).not.to.be.disabled);
        cy.get('#pagination-options-menu-bottom').find('.pf-c-options-menu__toggle-text')
          .then(toggleText => expect(toggleText).to.have.text('11 - 20 of 523 items'));
        cy.get('#pagination-options-menu-bottom').find('.pf-c-pagination__nav-page-select input')
          .then(input => expect(input).to.have.value('2'));
      });

  });
});
