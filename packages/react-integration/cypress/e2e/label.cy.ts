describe('Label Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/label-demo-nav-link');
  });

  it('Verify tooltip with long label text', () => {
    cy.get('#tooltip .pf-v5-c-label__text')
      .last()
      .then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });

  it('Verify no tooltip with short label text', () => {
    cy.get('#no-tooltip .pf-v5-c-label__text')
      .last()
      .then((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  it('Verify tooltip with textMaxWidth', () => {
    cy.get('#tooltip-max-width .pf-v5-c-label__text')
      .last()
      .then((tooltipLinkMaxWidth: JQuery<HTMLDivElement>) => {
        cy.wrap(tooltipLinkMaxWidth).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
        cy.wrap(tooltipLinkMaxWidth).trigger('mouseleave');
      });
  });

  it('Verify no tooltip with textMaxWidth', () => {
    cy.get('#no-tooltip-max-width').then((noTooltipLinkMaxWidth: JQuery<HTMLDivElement>) => {
      cy.wrap(noTooltipLinkMaxWidth).trigger('mouseenter').get('.pf-v5-c-tooltip').should('not.exist');
      cy.wrap(noTooltipLinkMaxWidth).trigger('mouseleave');
    });
  });

  it('Verify router link label', () => {
    cy.get('#router-link > .pf-v5-c-label__content').then((routerTooltipLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-v5-c-tooltip').should('not.exist');
      cy.wrap(routerTooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
    });
    cy.get('#router-link > a').invoke('attr', 'href').should('eq', '/');
  });
});
