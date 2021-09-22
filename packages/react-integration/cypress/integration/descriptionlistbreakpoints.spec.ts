describe('Description List Breakpoints Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/description-list-breakpoints-demo-nav-link');
  });

  it('Verify 1Col modifier applied for all viewport sizes ', () => {
    cy.get('#1-col-description-list.pf-m-1-col').should('exist');
    cy.get('#1-col-description-list.pf-m-1-col-on-md').should('exist');
    cy.get('#1-col-description-list.pf-m-1-col-on-lg').should('exist');
    cy.get('#1-col-description-list.pf-m-1-col-on-xl').should('exist');
    cy.get('#1-col-description-list.pf-m-1-col-on-2xl').should('exist');
  });

  it('Verify 2Col modifier applied for all viewport sizes ', () => {
    cy.get('#2-col-description-list.pf-m-2-col').should('exist');
    cy.get('#2-col-description-list.pf-m-2-col-on-md').should('exist');
    cy.get('#2-col-description-list.pf-m-2-col-on-lg').should('exist');
    cy.get('#2-col-description-list.pf-m-2-col-on-xl').should('exist');
    cy.get('#2-col-description-list.pf-m-2-col-on-2xl').should('exist');
  });

  it('Verify 3Col modifier applied for all viewport sizes ', () => {
    cy.get('#3-col-description-list.pf-m-3-col').should('exist');
    cy.get('#3-col-description-list.pf-m-3-col-on-md').should('exist');
    cy.get('#3-col-description-list.pf-m-3-col-on-lg').should('exist');
    cy.get('#3-col-description-list.pf-m-3-col-on-xl').should('exist');
    cy.get('#3-col-description-list.pf-m-3-col-on-2xl').should('exist');
  });

  it('Verify description list has layout breakpoints', () => {
    const list = cy.get('#orientation-description-list');
    list.should('have.class', 'pf-m-horizontal-on-sm');
    list.should('have.class', 'pf-m-vertical-on-md');
    list.should('have.class', 'pf-m-horizontal-on-lg');
    list.should('have.class', 'pf-m-vertical-on-xl');
    list.should('have.class', 'pf-m-horizontal-on-2xl');
  });
});
