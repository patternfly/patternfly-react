describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-view-more-grouped-demo-nav-link');
  });

  it('Verify grouped Select with view more button', () => {
    cy.clock();
    cy.get('#view-more-grouped-select').click();
    cy.get('.pf-v5-c-select__menu').contains('View more');
    cy.get('.pf-m-load').should('exist');
    cy.get('button.pf-v5-c-select__menu-item.pf-m-load').click();
    cy.get('.pf-m-loading').should('exist');
    cy.tick(16000);
    cy.get('.pf-m-load').should('not.exist');
    cy.get('.pf-m-loading').should('not.exist');
    cy.get('#view-more-grouped-select').click();
  });

  it('Verify grouped Check Select with view more button', () => {
    cy.clock();
    cy.get('#view-more-grouped-select-check').click();
    cy.get('.pf-v5-c-select__menu').contains('View more');
    cy.get('.pf-m-load').should('exist');
    cy.get('button.pf-v5-c-select__menu-item.pf-m-load').click();
    cy.get('.pf-m-loading').should('exist');
    cy.tick(16000);
    cy.get('.pf-m-load').should('not.exist');
    cy.get('.pf-m-loading').should('not.exist');
    cy.get('#view-more-grouped-select-check').click();
  });
});
