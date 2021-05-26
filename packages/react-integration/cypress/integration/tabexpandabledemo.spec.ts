describe('Tab Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#tab-expandable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/tab-expandable-demo-nav-link');
  });

  it('Verify controlled expandable vertical tabs ', () => {
    cy.get('#expandable-controlled').should('exist');
    cy.get('#expandable-controlled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-controlled').within(() => {
      cy.get('.pf-c-tabs__list').should('not.exist');
    });
    cy.get('#expandable-controlled')
      .find('.pf-c-tabs__toggle-icon')
      .click();
    cy.get('#expandable-controlled.pf-m-expanded').should('exist');
    // tabs list should exist
    cy.get('#expandable-controlled').within(() => {
      cy.get('.pf-c-tabs__list').should('exist');
    });
    cy.get('#expandable-controlled')
      .find('.pf-c-tabs__toggle-icon')
      .click();
    cy.get('#expandable-controlled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-controlled').within(() => {
      cy.get('.pf-c-tabs__list').should('not.exist');
    });
  });

  it('Verify uncontrolled expandable vertical tabs ', () => {
    cy.get('#expandable-uncontrolled').should('exist');
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-c-tabs__list').should('not.exist');
    });
    cy.get('#expandable-uncontrolled')
      .find('.pf-c-tabs__toggle-icon')
      .click();
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('exist');
    // tabs list should exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-c-tabs__list').should('exist');
    });
    cy.get('#expandable-uncontrolled')
      .find('.pf-c-tabs__toggle-icon')
      .click();
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-c-tabs__list').should('not.exist');
    });
  });

  it('Verify expandable breakpoints are applied  ', () => {
    // expandable
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-sm').should('exist');
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-md').should('exist');
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-lg').should('exist');
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-xl').should('exist');
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-2xl').should('exist');
    // non expandable
    cy.get('#expandable-breakpoints2.pf-m-expandable').should('exist');
    cy.get('#expandable-breakpoints2.pf-m-non-expandable-on-sm').should('exist');
    cy.get('#expandable-breakpoints2.pf-m-non-expandable-on-md').should('exist');
    cy.get('#expandable-breakpoints3.pf-m-expandable-on-xl').should('exist');
    cy.get('#expandable-breakpoints1.pf-m-expandable-on-2xl').should('exist');
    cy.get('#expandable-breakpoints3.pf-m-non-expandable').should('exist');
  });

  // it('Verify Medium inset applied for all viewport sizes ', () => {
  //   cy.get('#insetTabsMd.pf-m-inset-md').should('exist');
  //   cy.get('#insetTabsMd.pf-m-inset-md-on-md').should('exist');
  //   cy.get('#insetTabsMd.pf-m-inset-md-on-lg').should('exist');
  //   cy.get('#insetTabsMd.pf-m-inset-md-on-xl').should('exist');
  //   cy.get('#insetTabsMd.pf-m-inset-md-on-2xl').should('exist');
  // });

  // it('Verify Large inset applied for all viewport sizes ', () => {
  //   cy.get('#insetTabsLg.pf-m-inset-lg').should('exist');
  //   cy.get('#insetTabsLg.pf-m-inset-lg-on-md').should('exist');
  //   cy.get('#insetTabsLg.pf-m-inset-lg-on-lg').should('exist');
  //   cy.get('#insetTabsLg.pf-m-inset-lg-on-xl').should('exist');
  //   cy.get('#insetTabsLg.pf-m-inset-lg-on-2xl').should('exist');
  // });

  // it('Verify Extra Large inset applied for all viewport sizes ', () => {
  //   cy.get('#insetTabsXl.pf-m-inset-xl').should('exist');
  //   cy.get('#insetTabsXl.pf-m-inset-xl-on-md').should('exist');
  //   cy.get('#insetTabsXl.pf-m-inset-xl-on-lg').should('exist');
  //   cy.get('#insetTabsXl.pf-m-inset-xl-on-xl').should('exist');
  //   cy.get('#insetTabsXl.pf-m-inset-xl-on-2xl').should('exist');
  // });

  // it('Verify 2XL inset applied for all viewport sizes ', () => {
  //   cy.get('#insetTabs2Xl.pf-m-inset-2xl').should('exist');
  //   cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-md').should('exist');
  //   cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-lg').should('exist');
  //   cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-xl').should('exist');
  //   cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-2xl').should('exist');
  // });
});
