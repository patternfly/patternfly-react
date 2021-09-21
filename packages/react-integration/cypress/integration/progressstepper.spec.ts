describe('Progress Stepper Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#progress-stepper-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/progress-stepper-demo-nav-link');
  });

  it('Verify basic progress stepper', () => {
    cy.get('#success-step').should('have.class', 'pf-m-success');
    cy.get('#success-step .pf-c-progress-stepper__step-description').should('exist');

    cy.get('#warning-step').should('have.class', 'pf-m-warning');
    cy.get('#warning-step .pf-c-progress-stepper__step-description').should('not.exist');

    cy.get('#danger-step').should('have.class', 'pf-m-danger');
    cy.get('#current-step').should('have.class', 'pf-m-current');
    cy.get('#current-step').should('have.class', 'pf-m-info');
    cy.get('#pending-step').should('have.class', 'pf-m-pending');
  });

  it('Verify compact progress stepper', () => {
    cy.get('#compact-stepper').should('have.class', 'pf-m-compact');
  });
});
