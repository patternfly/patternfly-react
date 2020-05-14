describe('Popover Demo Test', () => {
  it('Navigate to popover section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#popover-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/popover-demo-nav-link');
  });

  it('Launch, Test, and Close Popover', () => {
    cy.get('div[id="popoverTarget"]').then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.get('.tippy-popper').should('not.exist');
      cy.wrap(popoverLink).click();
      cy.get('.tippy-popper').should('exist');
      cy.get('h6').contains('Popover Header');
      cy.get('.pf-c-popover__body').contains('Popover Body');
      cy.get('footer').contains('Popover Footer');
      cy.get('button[aria-label="Close"]').then(closeBtn => {
        cy.wrap(closeBtn).click();
        cy.get('.tippy-popper').should('not.exist');
      });
    });
  });

  it('Popover header has correct default size', () => {
    cy.get('div[id="popoverTarget"]').then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.wrap(popoverLink).click();
      cy.get('.tippy-popper').should('exist');
      cy.get('h6').should('have.class', 'pf-m-md');
    });
  });
});
