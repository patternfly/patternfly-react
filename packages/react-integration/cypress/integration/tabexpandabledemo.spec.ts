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
      cy.get('.pf-v5-c-tabs__list').should('not.be.visible');
    });
    cy.get('#expandable-controlled').find('.pf-v5-c-tabs__toggle-icon').click();
    cy.get('#expandable-controlled.pf-m-expanded').should('exist');
    // tabs list should exist
    cy.get('#expandable-controlled').within(() => {
      cy.get('.pf-v5-c-tabs__list').should('be.visible');
    });
    cy.get('#expandable-controlled').find('.pf-v5-c-tabs__toggle-icon').click();
    cy.get('#expandable-controlled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-controlled').within(() => {
      cy.get('.pf-v5-c-tabs__list').should('not.be.visible');
    });
  });

  it('Verify uncontrolled expandable vertical tabs ', () => {
    cy.get('#expandable-uncontrolled').should('exist');
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-v5-c-tabs__list').should('not.be.visible');
    });
    cy.get('#expandable-uncontrolled').find('.pf-v5-c-tabs__toggle-icon').click();
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('exist');
    // tabs list should exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-v5-c-tabs__list').should('be.visible');
    });
    cy.get('#expandable-uncontrolled').find('.pf-v5-c-tabs__toggle-icon').click();
    cy.get('#expandable-uncontrolled.pf-m-expanded').should('not.exist');
    // tabs list should not exist
    cy.get('#expandable-uncontrolled').within(() => {
      cy.get('.pf-v5-c-tabs__list').should('not.be.visible');
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
});
