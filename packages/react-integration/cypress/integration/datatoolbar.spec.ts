describe('Data Toolbar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#data-toolbar-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/data-toolbar-demo-nav-link');
  });

  describe('Toggle group and filter chips are appropriately responsive', () => {
    context('wide viewport', () => {
      beforeEach(() => {
        cy.viewport(1200, 800);
      });

      it('displays toggle group contents', () => {
        cy.get('#demo-toggle-group #toolbar-demo-search').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('be.visible');
        cy.get('.pf-c-data-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays filter chips', () => {
        cy.get('.pf-m-chip-group').should('be.visible');
        cy.get('.pf-m-filters-applied-message').should('not.be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-button').should('be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-chip-group__close').should('be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-button').contains('Clear filters');
      });
    });

    context('narrow viewport', () => {
      beforeEach(() => {
        cy.viewport(768, 800);
      });

      it('displays toggle icon', () => {
        cy.get('#demo-toggle-group .pf-c-data-toolbar__toggle').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-search').should('not.be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('not.be.visible');
        cy.get('.pf-c-data-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays X filters applied message', () => {
        cy.get('.pf-m-chip-container .pf-m-chip-group').should('not.be.visible');
        cy.get('.pf-m-filters-applied-message').should('be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-button').should('be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-chip-group__close').should('not.be.visible');
        cy.get('.pf-c-data-toolbar__item .pf-c-button').contains('Clear filters');
      });
    });
  });

  describe('Toggle group toggles appropriately when toggle not managed by consumer', () => {
    beforeEach(() => {
      cy.viewport(768, 800);
    });

    it('Verify toggle dropdown', () => {
      cy.get('#demo-toggle-group .pf-c-data-toolbar__toggle').should('be.visible');
    });

    xit('Verify expandable content expanded', () => {
      cy.get('#demo-toggle-group .pf-c-data-toolbar__toggle button')
        .last()
        .click();
      cy.get('.pf-c-data-toolbar__expandable-content').should('have.class', 'pf-m-expanded');
      cy.get('.pf-c-data-toolbar__expandable-content').should('be.visible');
      cy.get('.pf-m-chip-container').should('be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-button').should('be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-chip-group__close').should('be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-button').contains('Clear filters');
      cy.get('#demo-toggle-group .pf-c-data-toolbar__toggle button')
        .last()
        .click();
      cy.get('.pf-c-data-toolbar__expandable-content').should('not.have.class', 'pf-m-expanded');
      cy.get('.pf-c-data-toolbar__expandable-content').should('not.be.visible');
      cy.get('.pf-m-chip-container').should('not.be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-button').should('be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-chip-group__close').should('not.be.visible');
      cy.get('.pf-c-data-toolbar__item .pf-c-button').contains('Clear filters');
    });
  });
});
