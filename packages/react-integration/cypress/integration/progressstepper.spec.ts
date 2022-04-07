describe('Progress Stepper Demo Test', () => {
  it('Navigate to progress stepper section', () => {
    cy.visit('http://localhost:3000/progress-stepper-demo-nav-link');
  });

  it('Display Progress stepper and launch popover', () => {
    cy.get('#popover-step1-title').then((popoverLink: JQuery<HTMLDivElement>) => {
      cy.get('.pf-c-popover').should('not.exist');
      cy.wrap(popoverLink).click();
      cy.get('.pf-c-popover').should('exist');
      cy.get('button[aria-label="Close"]').then(closeBtn => {
        cy.wrap(closeBtn).click();
        cy.get('.pf-c-popover').should('not.exist');
      });
    });
  });
});
