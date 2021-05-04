describe('Data Toolbar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#toolbar-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/toolbar-demo-nav-link');
  });

  it('Verify widths styling mapped ', () => {
    cy.get('#width-item').should(
      'have.attr',
      'style',
      '--pf-c-toolbar__item--Width:100px; --pf-c-toolbar__item--Width-on-sm:80px; --pf-c-toolbar__item--Width-on-md:150px; --pf-c-toolbar__item--Width-on-lg:200px; --pf-c-toolbar__item--Width-on-xl:250px; --pf-c-toolbar__item--Width-on-2xl:300px;'
    );
  });

  it('Verify no inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-no-inset.pf-m-inset-none').should('exist');
    cy.get('#toolbar-no-inset.pf-m-inset-none-on-md').should('exist');
    cy.get('#toolbar-no-inset.pf-m-inset-none-on-lg').should('exist');
    cy.get('#toolbar-no-inset.pf-m-inset-none-on-xl').should('exist');
    cy.get('#toolbar-no-inset.pf-m-inset-none-on-2xl').should('exist');
  });

  it('Verify Small inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-sm-inset.pf-m-inset-sm').should('exist');
    cy.get('#toolbar-sm-inset.pf-m-inset-sm-on-md').should('exist');
    cy.get('#toolbar-sm-inset.pf-m-inset-sm-on-lg').should('exist');
    cy.get('#toolbar-sm-inset.pf-m-inset-sm-on-xl').should('exist');
    cy.get('#toolbar-sm-inset.pf-m-inset-sm-on-2xl').should('exist');
  });

  it('Verify Medium inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-md-inset.pf-m-inset-md').should('exist');
    cy.get('#toolbar-md-inset.pf-m-inset-md-on-md').should('exist');
    cy.get('#toolbar-md-inset.pf-m-inset-md-on-lg').should('exist');
    cy.get('#toolbar-md-inset.pf-m-inset-md-on-xl').should('exist');
    cy.get('#toolbar-md-inset.pf-m-inset-md-on-2xl').should('exist');
  });

  it('Verify Large inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-lg-inset.pf-m-inset-lg').should('exist');
    cy.get('#toolbar-lg-inset.pf-m-inset-lg-on-md').should('exist');
    cy.get('#toolbar-lg-inset.pf-m-inset-lg-on-lg').should('exist');
    cy.get('#toolbar-lg-inset.pf-m-inset-lg-on-xl').should('exist');
    cy.get('#toolbar-lg-inset.pf-m-inset-lg-on-2xl').should('exist');
  });

  it('Verify Extra Large inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-xl-inset.pf-m-inset-xl').should('exist');
    cy.get('#toolbar-xl-inset.pf-m-inset-xl-on-md').should('exist');
    cy.get('#toolbar-xl-inset.pf-m-inset-xl-on-lg').should('exist');
    cy.get('#toolbar-xl-inset.pf-m-inset-xl-on-xl').should('exist');
    cy.get('#toolbar-xl-inset.pf-m-inset-xl-on-2xl').should('exist');
  });

  it('Verify 2XL inset applied for all viewport sizes ', () => {
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl').should('exist');
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl-on-md').should('exist');
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl-on-lg').should('exist');
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl-on-xl').should('exist');
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl-on-2xl').should('exist');
  });

  describe('Toggle group and filter chips are appropriately responsive', () => {
    context('wide viewport', () => {
      beforeEach(() => {
        cy.viewport(1200, 800);
      });

      it('displays toggle group contents', () => {
        cy.get('#demo-toggle-group #toolbar-demo-search').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('be.visible');
        cy.get('.pf-c-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays filter chips', () => {
        cy.get('.pf-m-chip-group').should('be.visible');
        cy.get('.pf-m-filters-applied-message').should('not.be.visible');
        cy.get('.pf-c-toolbar__item .pf-c-button').should('be.visible');
        cy.get('.pf-c-toolbar__item .pf-c-chip-group__close').should('be.visible');
        cy.get('.pf-c-toolbar__item .pf-c-button').contains('Clear filters');
      });
    });

    context('narrow viewport', () => {
      beforeEach(() => {
        cy.viewport(768, 800);
      });

      it('displays toggle icon', () => {
        cy.get('#demo-toggle-group .pf-c-toolbar__toggle').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-search').should('not.be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('not.be.visible');
        cy.get('.pf-c-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays X filters applied message', () => {
        cy.get('.pf-m-chip-container .pf-m-chip-group').should('not.be.visible');
        cy.get('.pf-c-toolbar__item').should('contain.text', 'filters applied');
        cy.get('.pf-c-toolbar__item .pf-c-button').should('be.visible');
        cy.get('.pf-c-toolbar__item .pf-c-chip-group__close').should('not.be.visible');
        cy.get('.pf-c-toolbar__item .pf-c-button').contains('Clear filters');
      });
    });
  });

  describe('Toggle group toggles appropriately when toggle not managed by consumer', () => {
    beforeEach(() => {
      cy.viewport(768, 800);
    });

    it('Verify toggle dropdown', () => {
      cy.get('#demo-toggle-group .pf-c-toolbar__toggle').should('be.visible');
    });

    xit('Verify expandable content expanded', () => {
      cy.get('#demo-toggle-group .pf-c-toolbar__toggle button')
        .last()
        .click();
      cy.get('.pf-c-toolbar__expandable-content').should('have.class', 'pf-m-expanded');
      cy.get('.pf-c-toolbar__expandable-content').should('be.visible');
      cy.get('.pf-m-chip-container').should('be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-button').should('be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-chip-group__close').should('be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-button').contains('Clear filters');
      cy.get('#demo-toggle-group .pf-c-toolbar__toggle button')
        .last()
        .click();
      cy.get('.pf-c-toolbar__expandable-content').should('not.have.class', 'pf-m-expanded');
      cy.get('.pf-c-toolbar__expandable-content').should('not.be.visible');
      cy.get('.pf-m-chip-container').should('not.be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-button').should('be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-chip-group__close').should('not.be.visible');
      cy.get('.pf-c-toolbar__item .pf-c-button').contains('Clear filters');
    });
  });
});
