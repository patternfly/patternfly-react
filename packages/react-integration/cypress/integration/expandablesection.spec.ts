describe('Expandable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#expandable-section-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/expandable-section-demo-nav-link');
  });

  it('Verify controlled expandable', () => {
    cy.get('.pf-c-expandable-section__toggle')
      .first()
      .click();
    cy.get('.pf-c-expandable-section')
      .first()
      .should('have.class', 'pf-m-expanded');
  });

  it('Verify uncontrolled expandable', () => {
    cy.get('.pf-c-expandable-section__toggle')
      .last()
      .click();
    cy.get('.pf-c-expandable-section')
      .last()
      .should('have.class', 'pf-m-expanded');
  });

  it('Verify dynamic uncontrolled expandable', () => {
    cy.get('.pf-c-expandable-section__toggle')
      .find('span')
      .should('contain', 'Show More');
    cy.get('.pf-c-expandable-section__toggle')
      .last()
      .click();
    cy.get('.pf-c-expandable-section__toggle')
      .find('span')
      .should('contain', 'Show Less');
  });
});
