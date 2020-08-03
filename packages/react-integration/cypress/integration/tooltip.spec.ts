describe('Tooltip Demo Test', () => {
  it('Navigate to tooltip section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#tooltip-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/tooltip-demo-nav-link');
  });

  it('Display Tooltip', () => {
    ['tooltipTarget', 'tooltip-selector', 'tooltip-ref'].forEach(id => {
      cy.get(`[id="${id}"]`).then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink)
          .trigger('mouseenter')
          .get('.pf-c-tooltip')
          .should('exist');
      });
      cy.get(`[id="${id}"]`).trigger('mouseleave');
    });
  });
});
