describe('Label Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/label-demo-nav-link');
  });

  it('Verify isTruncated label and no tooltip on short text', () => {
    cy.get('#truncated-no-tooltip .pf-c-label__content span')
      .last()
      .should('have.class', 'pf-c-label__text')
      .then((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('not.exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  xit('Verify isTruncated label and tooltip', () => {
    cy.get('#truncated-label .pf-c-label__content span')
      .last()
      .should('have.class', 'pf-c-label__text')
      .then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });

  xit('Verify router link label', () => {
    cy.get('#router-link > .pf-c-label__content').then((routerTooltipLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-c-tooltip').should('not.exist');
      cy.wrap(routerTooltipLink)
        .trigger('mouseenter')
        .get('.pf-c-tooltip')
        .should('exist');
    });
    cy.get('#router-link > a')
      .invoke('attr', 'href')
      .should('eq', '/');
  });
});
