describe('Alert Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#alert-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/alert-demo-nav-link');
  });

  it('Verify info alert', () => {
    cy.get('#info-alert').should('have.class', 'pf-m-info');
  });

  it('Verify custom icon alert', () => {
    cy.get('#custom-icon-alert').should('have.class', 'pf-c-alert');
    cy.get('#custom-icon-alert').should('not.have.class', 'pf-m-info');
    cy.get('#custom-icon-alert').should('not.have.class', 'pf-m-success');
    cy.get('#custom-icon-alert').should('not.have.class', 'pf-m-danger');
    cy.get('#custom-icon-alert').should('not.have.class', 'pf-m-warning');
  });

  it('Verify default inline alert', () => {
    cy.get('#default-alert').should('not.have.class', 'pf-m-info');
    cy.get('#default-alert').should('not.have.class', 'pf-success');
    cy.get('#default-alert').should('not.have.class', 'pf-m-danger');
    cy.get('#default-alert').should('not.have.class', 'pf-m-warning');
    cy.get('#default-alert').should('have.class', 'pf-m-inline');
  });

  it('Verify default inline plain alert', () => {
    cy.get('#default-alert-inline-plain').should('not.have.class', 'pf-m-info');
    cy.get('#default-alert-inline-plain').should('not.have.class', 'pf-success');
    cy.get('#default-alert-inline-plain').should('not.have.class', 'pf-m-danger');
    cy.get('#default-alert-inline-plain').should('not.have.class', 'pf-m-warning');
    cy.get('#default-alert-inline-plain').should('have.class', 'pf-m-inline');
    cy.get('#default-alert-inline-plain').should('have.class', 'pf-m-plain');
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

  it('Verify expandable alert', () => {
    cy.get('#expandable-alert')
      .should('have.class', 'pf-m-expandable')
      .should('not.have.class', 'pf-m-expanded')
      .within(() => {
        cy.get('.pf-c-alert__description').should('not.exist');
        cy.get('.pf-c-alert__toggle').click();
        cy.get('.pf-c-alert__description').should('exist');
        cy.root().should('have.class', 'pf-m-expanded');
        cy.get('.pf-c-alert__toggle').click();
        cy.get('.pf-c-alert__description').should('not.exist');
        cy.root().should('not.have.class', 'pf-m-expanded');
      });
  });
});
