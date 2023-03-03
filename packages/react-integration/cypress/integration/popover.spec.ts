describe('Popover Demo Test', () => {
  it('Navigate to popover section', () => {
    cy.visit('http://localhost:3000/popover-demo-nav-link');
  });

  it('Launch, test, and close Popover', () => {
    ['popoverTarget', 'popover-selector', 'popover-ref'].forEach(id => {
      cy.get(`[id="${id}"]`).then((popoverLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-c-popover').should('not.exist');
        cy.wrap(popoverLink).click();
        cy.get('.pf-c-popover').should('exist');
        cy.get('h6').contains('Popover Header');
        cy.get('.pf-c-popover__body').contains('Popover Body');
        cy.get('footer').contains('Popover Footer');
        cy.get('button[aria-label="Close"]').then(closeBtn => {
          cy.wrap(closeBtn).click();
          cy.get('.pf-c-popover').should('not.exist');
        });
      });
    });
  });

  it('Popover header has correct default size', () => {
    cy.get('button[id="popoverTarget"]').then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.wrap(popoverLink).click();
      cy.get('.pf-c-popover').should('exist');
      cy.get('button[aria-label="Close"]').then(closeBtn => {
        cy.wrap(closeBtn).click();
        cy.get('.pf-c-popover').should('not.exist');
      });
    });
  });

  it('Popover header custom heading level', () => {
    cy.get('[id="popover-heading-level-toggle"]').then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.wrap(popoverLink).click();
      cy.get('.pf-c-popover').should('exist');
      cy.get('h1').should('exist');
      cy.get('button[aria-label="Close"]').then(closeBtn => {
        cy.wrap(closeBtn).click();
        cy.get('.pf-c-popover').should('not.exist');
      });
    });
  });

  it('Close popover from content', () => {
    cy.get(`[id="popover-content-close-toggle"]`).then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-c-popover').should('not.exist');
      cy.wrap(popoverLink).click();
      cy.get('.pf-c-popover').should('exist');
      cy.get('.pf-c-popover__body').should('exist');
      cy.get('[id="popover-content-close-btn"]').then(btn => {
        cy.wrap(btn).click();
        cy.get('.pf-c-popover').should('not.exist');
      });
    });
  });

  it('Applies diagonal modifiers', () => {
    cy.get('#popover-right-top-toggle').click();
    cy.get('.pf-c-popover').should('have.class', 'pf-m-right-top');
    cy.get('#popover-right-top-toggle').click();
    cy.get('.pf-c-popover').should('not.exist');
  });
});
