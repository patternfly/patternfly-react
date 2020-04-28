describe('Tab Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#tabs-inset-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/tabs-inset-demo-nav-link');
  });

  it('Verify no inset applied for all viewport sizes ', () => {
    cy.get('#insetTabsNone.pf-m-inset-none').should('exist');
    cy.get('#insetTabsNone.pf-m-inset-none-on-md').should('exist');
    cy.get('#insetTabsNone.pf-m-inset-none-on-lg').should('exist');
    cy.get('#insetTabsNone.pf-m-inset-none-on-xl').should('exist');
    cy.get('#insetTabsNone.pf-m-inset-none-on-2xl').should('exist');
  });

  it('Verify Small inset applied for all viewport sizes ', () => {
    cy.get('#insetTabsSm.pf-m-inset-sm').should('exist');
    cy.get('#insetTabsSm.pf-m-inset-sm-on-md').should('exist');
    cy.get('#insetTabsSm.pf-m-inset-sm-on-lg').should('exist');
    cy.get('#insetTabsSm.pf-m-inset-sm-on-xl').should('exist');
    cy.get('#insetTabsSm.pf-m-inset-sm-on-2xl').should('exist');
  });

  it('Verify Medium inset applied for all viewport sizes ', () => {
    cy.get('#insetTabsMd.pf-m-inset-md').should('exist');
    cy.get('#insetTabsMd.pf-m-inset-md-on-md').should('exist');
    cy.get('#insetTabsMd.pf-m-inset-md-on-lg').should('exist');
    cy.get('#insetTabsMd.pf-m-inset-md-on-xl').should('exist');
    cy.get('#insetTabsMd.pf-m-inset-md-on-2xl').should('exist');
  });

  it('Verify Large inset applied for all viewport sizes ', () => {
    cy.get('#insetTabsLg.pf-m-inset-lg').should('exist');
    cy.get('#insetTabsLg.pf-m-inset-lg-on-md').should('exist');
    cy.get('#insetTabsLg.pf-m-inset-lg-on-lg').should('exist');
    cy.get('#insetTabsLg.pf-m-inset-lg-on-xl').should('exist');
    cy.get('#insetTabsLg.pf-m-inset-lg-on-2xl').should('exist');
  });

  it('Verify Extra Large inset applied for all viewport sizes ', () => {
    cy.get('#insetTabsXl.pf-m-inset-xl').should('exist');
    cy.get('#insetTabsXl.pf-m-inset-xl-on-md').should('exist');
    cy.get('#insetTabsXl.pf-m-inset-xl-on-lg').should('exist');
    cy.get('#insetTabsXl.pf-m-inset-xl-on-xl').should('exist');
    cy.get('#insetTabsXl.pf-m-inset-xl-on-2xl').should('exist');
  });

  it('Verify 2XL inset applied for all viewport sizes ', () => {
    cy.get('#insetTabs2Xl.pf-m-inset-2xl').should('exist');
    cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-md').should('exist');
    cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-lg').should('exist');
    cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-xl').should('exist');
    cy.get('#insetTabs2Xl.pf-m-inset-2xl-on-2xl').should('exist');
  });
});
