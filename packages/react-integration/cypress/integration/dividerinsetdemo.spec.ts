describe('Divider Inset Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#divider-inset-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/divider-inset-demo-nav-link');
  });

  it('Verify no inset applied for all viewport sizes ', () => {
    cy.get('#insetNone.pf-m-inset-none').should('exist');
    cy.get('#insetNone.pf-m-inset-none-on-md').should('exist');
    cy.get('#insetNone.pf-m-inset-none-on-lg').should('exist');
    cy.get('#insetNone.pf-m-inset-none-on-xl').should('exist');
    cy.get('#insetNone.pf-m-inset-none-on-2xl').should('exist');
  });

  it('Verify Xs inset applied for all viewport sizes ', () => {
    cy.get('#insetXs.pf-m-inset-xs').should('exist');
    cy.get('#insetXs.pf-m-inset-xs-on-md').should('exist');
    cy.get('#insetXs.pf-m-inset-xs-on-lg').should('exist');
    cy.get('#insetXs.pf-m-inset-xs-on-xl').should('exist');
    cy.get('#insetXs.pf-m-inset-xs-on-2xl').should('exist');
  });

  it('Verify Small inset applied for all viewport sizes ', () => {
    cy.get('#insetSm.pf-m-inset-sm').should('exist');
    cy.get('#insetSm.pf-m-inset-sm-on-md').should('exist');
    cy.get('#insetSm.pf-m-inset-sm-on-lg').should('exist');
    cy.get('#insetSm.pf-m-inset-sm-on-xl').should('exist');
    cy.get('#insetSm.pf-m-inset-sm-on-2xl').should('exist');
  });

  it('Verify Medium inset applied for all viewport sizes ', () => {
    cy.get('#insetMd.pf-m-inset-md').should('exist');
    cy.get('#insetMd.pf-m-inset-md-on-md').should('exist');
    cy.get('#insetMd.pf-m-inset-md-on-lg').should('exist');
    cy.get('#insetMd.pf-m-inset-md-on-xl').should('exist');
    cy.get('#insetMd.pf-m-inset-md-on-2xl').should('exist');
  });

  it('Verify Large inset applied for all viewport sizes ', () => {
    cy.get('#insetLg.pf-m-inset-lg').should('exist');
    cy.get('#insetLg.pf-m-inset-lg-on-md').should('exist');
    cy.get('#insetLg.pf-m-inset-lg-on-lg').should('exist');
    cy.get('#insetLg.pf-m-inset-lg-on-xl').should('exist');
    cy.get('#insetLg.pf-m-inset-lg-on-2xl').should('exist');
  });

  it('Verify Extra Large inset applied for all viewport sizes ', () => {
    cy.get('#insetXl.pf-m-inset-xl').should('exist');
    cy.get('#insetXl.pf-m-inset-xl-on-md').should('exist');
    cy.get('#insetXl.pf-m-inset-xl-on-lg').should('exist');
    cy.get('#insetXl.pf-m-inset-xl-on-xl').should('exist');
    cy.get('#insetXl.pf-m-inset-xl-on-2xl').should('exist');
  });

  it('Verify 2XL inset applied for all viewport sizes ', () => {
    cy.get('#inset2Xl.pf-m-inset-2xl').should('exist');
    cy.get('#inset2Xl.pf-m-inset-2xl-on-md').should('exist');
    cy.get('#inset2Xl.pf-m-inset-2xl-on-lg').should('exist');
    cy.get('#inset2Xl.pf-m-inset-2xl-on-xl').should('exist');
    cy.get('#inset2Xl.pf-m-inset-2xl-on-2xl').should('exist');
  });

  it('Verify 3XL inset applied for all viewport sizes ', () => {
    cy.get('#inset3Xl.pf-m-inset-3xl').should('exist');
    cy.get('#inset3Xl.pf-m-inset-3xl-on-md').should('exist');
    cy.get('#inset3Xl.pf-m-inset-3xl-on-lg').should('exist');
    cy.get('#inset3Xl.pf-m-inset-3xl-on-xl').should('exist');
    cy.get('#inset3Xl.pf-m-inset-3xl-on-2xl').should('exist');
  });

  it('Verify no inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInsetNone.pf-m-inset-none').should('exist');
    cy.get('#verticalInsetNone.pf-m-inset-none-on-md').should('exist');
    cy.get('#verticalInsetNone.pf-m-inset-none-on-lg').should('exist');
    cy.get('#verticalInsetNone.pf-m-inset-none-on-xl').should('exist');
    cy.get('#verticalInsetNone.pf-m-inset-none-on-2xl').should('exist');
  });

  it('Verify Xs inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInsetXs.pf-m-inset-xs').should('exist');
    cy.get('#verticalInsetXs.pf-m-inset-xs-on-md').should('exist');
    cy.get('#verticalInsetXs.pf-m-inset-xs-on-lg').should('exist');
    cy.get('#verticalInsetXs.pf-m-inset-xs-on-xl').should('exist');
    cy.get('#verticalInsetXs.pf-m-inset-xs-on-2xl').should('exist');
  });

  it('Verify Small inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInsetSm.pf-m-inset-sm').should('exist');
    cy.get('#verticalInsetSm.pf-m-inset-sm-on-md').should('exist');
    cy.get('#verticalInsetSm.pf-m-inset-sm-on-lg').should('exist');
    cy.get('#verticalInsetSm.pf-m-inset-sm-on-xl').should('exist');
    cy.get('#verticalInsetSm.pf-m-inset-sm-on-2xl').should('exist');
  });

  it('Verify Medium inset applied for all viewport sizes for Vertical Divider  ', () => {
    cy.get('#verticalInsetMd.pf-m-inset-md').should('exist');
    cy.get('#verticalInsetMd.pf-m-inset-md-on-md').should('exist');
    cy.get('#verticalInsetMd.pf-m-inset-md-on-lg').should('exist');
    cy.get('#verticalInsetMd.pf-m-inset-md-on-xl').should('exist');
    cy.get('#verticalInsetMd.pf-m-inset-md-on-2xl').should('exist');
  });

  it('Verify Large inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInsetLg.pf-m-inset-lg').should('exist');
    cy.get('#verticalInsetLg.pf-m-inset-lg-on-md').should('exist');
    cy.get('#verticalInsetLg.pf-m-inset-lg-on-lg').should('exist');
    cy.get('#verticalInsetLg.pf-m-inset-lg-on-xl').should('exist');
    cy.get('#verticalInsetLg.pf-m-inset-lg-on-2xl').should('exist');
  });

  it('Verify Extra Large inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInsetXl.pf-m-inset-xl').should('exist');
    cy.get('#verticalInsetXl.pf-m-inset-xl-on-md').should('exist');
    cy.get('#verticalInsetXl.pf-m-inset-xl-on-lg').should('exist');
    cy.get('#verticalInsetXl.pf-m-inset-xl-on-xl').should('exist');
    cy.get('#verticalInsetXl.pf-m-inset-xl-on-2xl').should('exist');
  });

  it('Verify 2XL inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInset2Xl.pf-m-inset-2xl').should('exist');
    cy.get('#verticalInset2Xl.pf-m-inset-2xl-on-md').should('exist');
    cy.get('#verticalInset2Xl.pf-m-inset-2xl-on-lg').should('exist');
    cy.get('#verticalInset2Xl.pf-m-inset-2xl-on-xl').should('exist');
    cy.get('#verticalInset2Xl.pf-m-inset-2xl-on-2xl').should('exist');
  });

  it('Verify 3XL inset applied for all viewport sizes for Vertical Divider ', () => {
    cy.get('#verticalInset3Xl.pf-m-inset-3xl').should('exist');
    cy.get('#verticalInset3Xl.pf-m-inset-3xl-on-md').should('exist');
    cy.get('#verticalInset3Xl.pf-m-inset-3xl-on-lg').should('exist');
    cy.get('#verticalInset3Xl.pf-m-inset-3xl-on-xl').should('exist');
    cy.get('#verticalInset3Xl.pf-m-inset-3xl-on-2xl').should('exist');
  });
});
