describe('Pagination Demo Test', () => {
  it('Navigate to Pagination section', () => {
    cy.visit('http://localhost:3000/pagination-demo-nav-link');
  });

  it('should be disabled when flag is present', () => {
    cy.get('.pagination-options-menu-disabled')
      .find('.pf-v5-c-menu-toggle__text')
      .then((toggleText) => expect(toggleText).to.have.text('1 - 20 of 523 '));
    cy.get('.pagination-options-menu-disabled')
      .find('button[data-action="first"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-disabled')
      .find('button[data-action="previous"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-disabled')
      .find('button[data-action="next"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-disabled')
      .find('button[data-action="last"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-disabled .pf-v5-c-menu-toggle').then((button) => expect(button).to.be.disabled);
  });

  it('should be sticky when flag is present', () => {
    cy.get('.pagination-options-menu-sticky').should('have.class', 'pf-m-sticky');
  });

  it('Verify initial state', () => {
    cy.get('.pf-v5-c-pagination').should('have.length', 5);
    cy.get('.pagination-options-menu-bottom.pf-v5-c-pagination.pf-m-bottom').should('exist');
    cy.get('.pagination-options-menu-top')
      .find('.pf-v5-c-menu-toggle__text')
      .then((toggleText) => expect(toggleText).to.have.text('1 - 20 of 523 '));

    cy.get('.pagination-options-menu-top')
      .find('button[data-action="first"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-top')
      .find('button[data-action="previous"]')
      .then((button) => expect(button).to.be.disabled);
    cy.get('.pagination-options-menu-top')
      .find('button[data-action="next"]')
      .then((button) => expect(button).not.to.be.disabled);
    cy.get('.pagination-options-menu-top')
      .find('button[data-action="last"]')
      .then((button) => expect(button).not.to.be.disabled);

    cy.get('.pagination-options-menu-top')
      .find('.pf-v5-c-pagination__nav-page-select input')
      .then((input) => expect(input).to.have.value('1'));
    cy.get('.pagination-options-menu-top')
      .find('.pf-v5-c-pagination__nav-page-select')
      .then((navPageSelect) => expect(navPageSelect).to.have.text('of 27'));
  });

  it('Verify event handlers fire correctly', () => {
    cy.get('.pagination-options-menu-top')
      .find('.pf-v5-c-menu-toggle')
      .then((toggleButton: JQuery<HTMLButtonElement>) => {
        cy.wrap(toggleButton).click();
        cy.get('.pf-v5-c-menu-toggle.pf-m-expanded').should('exist');
        cy.get('li[data-action="per-page-10"]').then((firstMenuItem: JQuery<HTMLButtonElement>) => {
          cy.wrap(firstMenuItem).click();
          cy.get('.pf-v5-c-menu-toggle.pf-m-expanded').should('not.exist');
          cy.get('.pagination-options-menu-top')
            .find('.pf-v5-c-menu-toggle__text')
            .then((toggleText) => expect(toggleText).to.have.text('1 - 10 of 523 '));
          cy.get('.pagination-options-menu-top')
            .find('.pf-v5-c-pagination__nav-page-select')
            .then((navPageSelect) => expect(navPageSelect).to.have.text('of 53'));

          cy.get('.pagination-options-menu-bottom')
            .find('.pf-v5-c-menu-toggle__text')
            .then((toggleText) => expect(toggleText).to.have.text('1 - 10 of 523 '));
          cy.get('.pagination-options-menu-bottom')
            .find('.pf-v5-c-pagination__nav-page-select')
            .then((navPageSelect) => expect(navPageSelect).to.have.text('of 53'));
        });
      });

    cy.get('.pagination-options-menu-top')
      .find('button[data-action="next"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('.pagination-options-menu-top')
          .find('button[data-action="first"]')
          .then((firstButton) => expect(firstButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-top')
          .find('button[data-action="previous"]')
          .then((previousButton) => expect(previousButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-top')
          .find('.pf-v5-c-menu-toggle__text')
          .then((toggleText) => expect(toggleText).to.have.text('11 - 20 of 523 '));
        cy.get('.pagination-options-menu-top')
          .find('.pf-v5-c-pagination__nav-page-select input')
          .then((input) => expect(input).to.have.value('2'));
      });

    cy.get('.pagination-options-menu-bottom')
      .find('button[data-action="next"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('.pagination-options-menu-bottom')
          .find('button[data-action="first"]')
          .then((firstButton) => expect(firstButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-bottom')
          .find('button[data-action="previous"]')
          .then((previousButton) => expect(previousButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-bottom')
          .find('.pf-v5-c-menu-toggle__text')
          .then((toggleText) => expect(toggleText).to.have.text('11 - 20 of 523 '));
        cy.get('.pagination-options-menu-bottom')
          .find('.pf-v5-c-pagination__nav-page-select input')
          .then((input) => expect(input).to.have.value('2'));
      });

    cy.get('.pagination-options-menu-default-fullpage')
      .find('button[data-action="next"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('.pagination-options-menu-default-fullpage')
          .find('button[data-action="first"]')
          .then((firstButton) => expect(firstButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-default-fullpage')
          .find('button[data-action="previous"]')
          .then((previousButton) => expect(previousButton).not.to.be.disabled);
        cy.get('.pagination-options-menu-default-fullpage')
          .find('.pf-v5-c-menu-toggle__text')
          .then((toggleText) => expect(toggleText).to.have.text('11 - 20 of 523 '));
        cy.get('.pagination-options-menu-default-fullpage')
          .find('.pf-v5-c-pagination__nav-page-select input')
          .then((input) => expect(input).to.have.value('2'));
      });
  });

  it('Verify isLastFullPageShown works correctly', () => {
    cy.get('.pagination-options-menu-default-fullpage')
      .find('button[data-action="last"]')
      .then((button: JQuery<HTMLButtonElement>) => {
        cy.wrap(button).click();
        cy.get('.pagination-options-menu-default-fullpage')
          .find('.pf-v5-c-menu-toggle')
          .then((toggleButton: JQuery<HTMLButtonElement>) => {
            cy.wrap(toggleButton).click();
            cy.get('.pf-v5-c-menu-toggle.pf-m-expanded').should('exist');
            cy.get('li[data-action="per-page-100"]').then((lastMenuItem: JQuery<HTMLButtonElement>) => {
              cy.wrap(lastMenuItem).click();
              cy.get('.pf-v5-c-menu-toggle.pf-m-expanded').should('not.exist');
              cy.get('.pagination-options-menu-default-fullpage')
                .find('.pf-v5-c-menu-toggle__text')
                .then((toggleText) => expect(toggleText).to.have.text('401 - 500 of 523 '));
              cy.get('.pagination-options-menu-default-fullpage')
                .find('.pf-v5-c-form-control')
                .then((currentPage) => expect(currentPage).to.have.value('5'));
            });
          });
      });
  });
});
