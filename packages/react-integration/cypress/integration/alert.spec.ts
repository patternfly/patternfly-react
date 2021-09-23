describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/alert-demo-nav-link');
  });

  it('Verify alerts close', () => {
    cy.get('#test-button-1').click();
    cy.get('#test-button-2').click();
    cy.get('#info-alert').should('not.exist');
  });

  it('Verify truncateTitle and no tooltip on short text', () => {
    cy.get('#default-alert > .pf-c-alert__title')
      .should('have.class', 'pf-m-truncate')
      .then((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('not.exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  it('Verify truncateTitle alert and tooltip', () => {
    cy.get('#long-title-alert > .pf-c-alert__title')
      .should('have.class', 'pf-m-truncate')
      .then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });
});
