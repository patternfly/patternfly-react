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
    cy.get('#default-alert > .pf-v5-c-alert__title')
      .should('have.class', 'pf-m-truncate')
      .then((noTooltipLink: JQuery<HTMLDivElement>) => {
        cy.wrap(noTooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(noTooltipLink).trigger('mouseleave');
      });
  });

  it('Verify truncateTitle alert and tooltip', () => {
    cy.get('#long-title-alert .pf-v5-c-alert__title')
      .should('have.class', 'pf-m-truncate')
      .then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
        cy.wrap(tooltipLink).trigger('mouseleave');
      });
  });

  it('Verify expandable alert', () => {
    cy.get('#expandable-alert')
      .should('have.class', 'pf-m-expandable')
      .should('not.have.class', 'pf-m-expanded')
      .within(() => {
        cy.get('.pf-v5-c-alert__description').should('not.exist');
        cy.get('.pf-v5-c-alert__toggle').click();
        cy.get('.pf-v5-c-alert__description').should('exist');
        cy.root().should('have.class', 'pf-m-expanded');
        cy.get('.pf-v5-c-alert__toggle').click();
        cy.get('.pf-v5-c-alert__description').should('not.exist');
        cy.root().should('not.have.class', 'pf-m-expanded');
      });
  });
});
