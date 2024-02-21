describe('Expandable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/expandable-section-demo-nav-link');
  });

  it('Verify controlled expandable', () => {
    cy.get('.pf-v6-c-expandable-section__toggle').first().click();
    cy.get('.pf-v6-c-expandable-section').first().should('have.class', 'pf-m-expanded');
  });

  it('Verify uncontrolled expandable', () => {
    cy.get('.pf-v6-c-expandable-section__toggle').last().click();
    cy.get('.pf-v6-c-expandable-section').last().should('have.class', 'pf-m-expanded');
  });

  it('Verify dynamic uncontrolled expandable', () => {
    cy.get('.pf-v6-c-expandable-section__toggle').find('span').should('contain', 'Show More');
    cy.get('.pf-v6-c-expandable-section__toggle').last().click();
    cy.get('.pf-v6-c-expandable-section__toggle').find('span').should('contain', 'Show Less');
  });

  // disabled this test because pf-m-detached was removed from core.
  xit('Verify detached expandable', () => {
    cy.get('#detached').should('have.class', 'pf-m-detached');
    cy.get('#detached-section').should('have.class', 'pf-m-detached');
    cy.get('#detached button').click();
    cy.get('#detached-section').should('have.class', 'pf-m-expanded');
  });

  it('Verify disclosure expandable', () => {
    cy.get('#disclosure-expandable-section > .pf-v6-c-expandable-section__toggle').click();
    cy.get('#disclosure-expandable-section').should('have.class', 'pf-m-expanded');
    cy.get('#disclosure-expandable-section').should('have.class', 'pf-m-display-lg');
    cy.get('#disclosure-expandable-section').should('have.class', 'pf-m-limit-width');
  });
});
