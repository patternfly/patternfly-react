describe('Label Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/label-demo-nav-link');
  });

  it('Verify tooltip with long label text', () => {
    cy.get('#tooltip')
      .should((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });

  it('Verify no tooltip with short label text', () => {
    cy.get('#no-tooltip')
      .should((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  it('Verify tooltip with textMaxWidth', () => {
    cy.get('#tooltip-max-width')
      .should((tooltipLinkMaxWidth: JQuery<HTMLDivElement>) => {
        cy.wrap(tooltipLinkMaxWidth)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
        cy.wrap(tooltipLinkMaxWidth).trigger('mouseleave');
      });
  });

  it('Verify no tooltip with textMaxWidth', () => {
    cy.get('#no-tooltip-max-width')
      .should((noTooltipLinkMaxWidth: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLinkMaxWidth)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('not.exist');
        cy.wrap(noTooltipLinkMaxWidth).trigger('mouseleave');
      });
  });

  it('Verify router link label', () => {
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
