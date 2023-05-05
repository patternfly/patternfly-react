describe('Data Toolbar Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/toolbar-demo-nav-link');
  });

  it.skip('Verify widths styling mapped ', () => {
    cy.get('#width-item').should(
      'have.attr',
      'style',
      '--pf-v5-c-toolbar__item--Width:100px; --pf-v5-c-toolbar__item--Width-on-sm:80px; --pf-v5-c-toolbar__item--Width-on-md:150px; --pf-v5-c-toolbar__item--Width-on-lg:200px; --pf-v5-c-toolbar__item--Width-on-xl:250px; --pf-v5-c-toolbar__item--Width-on-2xl:300px;'
    );
  });

  it('Verify no inset applied for default viewport size (1200) ', () => {
    cy.get('#toolbar-no-inset.pf-m-inset-none').should('exist');
  });

  it('Verify Small inset applied for default viewport size (1200) ', () => {
    cy.get('#toolbar-sm-inset.pf-m-inset-sm').should('exist');
  });

  it('Verify Medium inset applied for default viewport size (1200) ', () => {
    cy.get('#toolbar-md-inset.pf-m-inset-md').should('exist');
  });

  it('Verify Large inset applied for default viewport size (1200) ', () => {
    cy.get('#toolbar-lg-inset.pf-m-inset-lg').should('exist');
  });

  it('Verify Extra Large inset applied for default viewport size (1200) ', () => {
    cy.get('#toolbar-xl-inset.pf-m-inset-xl').should('exist');
  });

  it('Verify 2XL inset applied for default viewport size (1200) ', () => {
    // 2xl should only be added for viewport size >= 1450
    cy.get('#toolbar-2xl-inset.pf-m-inset-2xl').should('not.exist');
  });

  describe('Toggle group and filter chips are appropriately responsive', () => {
    context('wide viewport', () => {
      beforeEach(() => {
        cy.viewport(1800, 800);
      });

      it('displays toggle group contents', () => {
        cy.get('#demo-toggle-group #toolbar-demo-search').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('be.visible');
        cy.get('.pf-v5-c-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays filter chips', () => {
        cy.get('.pf-m-chip-group').should('be.visible');
        cy.get('.pf-m-filters-applied-message').should('not.exist');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').should('be.visible');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-chip-group__close').should('be.visible');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').contains('Clear filters');
      });
    });

    context('narrow viewport', () => {
      beforeEach(() => {
        cy.viewport(768, 800);
      });

      it('displays toggle icon', () => {
        cy.get('#demo-toggle-group .pf-v5-c-toolbar__toggle').should('be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-search').should('not.be.visible');
        cy.get('#demo-toggle-group #toolbar-demo-filters').should('not.be.visible');
        cy.get('.pf-v5-c-toolbar__expandable-content').should('not.be.visible');
      });

      it('displays X filters applied message', () => {
        cy.get('.pf-m-chip-container .pf-m-chip-group').should('not.exist');
        cy.get('.pf-v5-c-toolbar__item').should('contain.text', 'filters applied');
        cy.get('.pf-v5-c-toolbar__item').should('contain.text', 'Applied filters: ');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').should('be.visible');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-chip-group__close').should('not.be.visible');
        cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').contains('Clear filters');
      });
    });
  });

  describe('Toggle group toggles appropriately when toggle not managed by consumer', () => {
    beforeEach(() => {
      cy.viewport(768, 800);
    });

    it('Verify toggle dropdown', () => {
      cy.get('#demo-toggle-group .pf-v5-c-toolbar__toggle').should('be.visible');
    });

    xit('Verify expandable content expanded', () => {
      cy.get('#demo-toggle-group .pf-v5-c-toolbar__toggle button').last().click();
      cy.get('.pf-v5-c-toolbar__expandable-content').should('have.class', 'pf-m-expanded');
      cy.get('.pf-v5-c-toolbar__expandable-content').should('be.visible');
      cy.get('.pf-m-chip-container').should('be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').should('be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-chip-group__close').should('be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').contains('Clear filters');
      cy.get('#demo-toggle-group .pf-v5-c-toolbar__toggle button').last().click();
      cy.get('.pf-v5-c-toolbar__expandable-content').should('not.have.class', 'pf-m-expanded');
      cy.get('.pf-v5-c-toolbar__expandable-content').should('not.be.visible');
      cy.get('.pf-m-chip-container').should('not.be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').should('be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-chip-group__close').should('not.be.visible');
      cy.get('.pf-v5-c-toolbar__item .pf-v5-c-button').contains('Clear filters');
    });
  });
});
