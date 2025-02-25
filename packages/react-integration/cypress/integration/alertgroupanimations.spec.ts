describe('Alert Group Animations Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/alert-group-animations-demo-nav-link');
  });

  it('Renders alert group item with animation classes', () => {
    cy.clock();
    cy.get('#add-alert-button').click();
    cy.get('.pf-v6-c-alert-group__item').should('have.class', 'pf-m-offstage-top');
    cy.tick(1000);
    cy.get('.pf-v6-c-alert-group__item').should('not.have.class', 'pf-m-offstage-top');
    cy.get('#alert-close-button').click();
    cy.tick(5);
    cy.get('.pf-v6-c-alert-group__item').should('have.class', 'pf-m-offstage-right');
  });
});
