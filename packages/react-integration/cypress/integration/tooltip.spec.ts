describe('Tooltip Demo Test', () => {
  it('Navigate to tooltip section', () => {
    cy.visit('http://localhost:3000/tooltip-demo-nav-link');
  });

  it('Display Tooltip', () => {
    ['tooltipTarget', 'tooltip-selector', 'tooltip-ref'].forEach((id) => {
      cy.get(`[id="${id}"]`).then((tooltipLink: JQuery<HTMLDivElement>) => {
        cy.get('.pf-v5-c-tooltip').should('not.exist');
        cy.wrap(tooltipLink).trigger('mouseenter').get('.pf-v5-c-tooltip').should('exist');
      });
      cy.get(`[id="${id}"]`).trigger('mouseleave');
    });
  });
});
