describe('Alert Group Animations Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/alert-group-animations-demo-nav-link');
  });

  it('Renders alert group item initially with animation class', () => {
    cy.clock();
    cy.get('#add-alert-button').click();
    cy.get('.pf-v6-c-alert-group__item').should('have.class', 'pf-m-offstage-top');
    cy.tick(100);
    cy.get('#alert-close-button').click();
    // Slightly more time than the fadeShort token used for timeout in component code
    cy.tick(150);
    cy.get('.pf-v6-c-alert').should('not.exist');
  });

  it('Renders alert group item with animation class removed after rendering', () => {
    cy.get('#add-alert-button').click();
    cy.get('.pf-v6-c-alert-group__item').should('not.have.class', 'pf-m-offstage-top');
    cy.get('#alert-close-button').click();
    cy.get('.pf-v6-c-alert').should('not.exist');
  });

  it('Adds animation class to alert group item before alert is removed', () => {
    cy.get('#add-alert-button').click();
    cy.clock();
    cy.get('#alert-close-button').click();
    // Slightly less time than the fadeShort token used for timeout in component code
    cy.tick(50);
    cy.get('.pf-v6-c-alert-group__item').should('have.class', 'pf-m-offstage-right');
    cy.tick(100);
    cy.get('.pf-v6-c-alert').should('not.exist');
  });
});
