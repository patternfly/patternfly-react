describe('Toggle Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/toggle-group-demo-nav-link');
  });

  it('Verify toggle group buttons can be checked unless disabled', () => {
    cy.get('#first').click().should('have.class', 'pf-m-selected');
    cy.get('#first').click().should('not.have.class', 'pf-m-selected');

    cy.get('#second').click().should('have.class', 'pf-m-selected');
    cy.get('#second').click().should('not.have.class', 'pf-m-selected');

    cy.get('#disabled').should('be.disabled');

    cy.get('#third').click().should('have.class', 'pf-m-selected');
    cy.get('#third').click().should('not.have.class', 'pf-m-selected');

    cy.get('#fourth').click().should('have.class', 'pf-m-selected');
    cy.get('#fourth').click().should('not.have.class', 'pf-m-selected');

    cy.get('#fifth').click().should('have.class', 'pf-m-selected');
    cy.get('#sixth').click().should('have.class', 'pf-m-selected');
    cy.get('#seventh').click().should('have.class', 'pf-m-selected');

    cy.get('#fifth').click().should('not.have.class', 'pf-m-selected');
    cy.get('#sixth').click().should('not.have.class', 'pf-m-selected');
    cy.get('#seventh').click().should('not.have.class', 'pf-m-selected');
  });

  it('Verify toggle group is compact', () => {
    cy.get('.pf-v5-c-toggle-group').eq(2).should('have.class', 'pf-m-compact');
  });
});
