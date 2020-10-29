describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-demo-nav-link');
  });

  it('Verify info alert', () => {
    cy.get('#info-alert').should('have.class', 'pf-m-info');
  });

  it('Verify default inline alert', () => {
    cy.get('#default-alert').should('not.have.class', 'pf-m-info');
    cy.get('#default-alert').should('not.have.class', 'pf-success');
    cy.get('#default-alert').should('not.have.class', 'pf-m-danger');
    cy.get('#default-alert').should('not.have.class', 'pf-m-warning');
    cy.get('#default-alert').should('have.class', 'pf-m-inline');
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
