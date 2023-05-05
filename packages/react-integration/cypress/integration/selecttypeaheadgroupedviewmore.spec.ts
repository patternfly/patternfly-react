describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-view-more-typeahead-grouped-demo-nav-link');
  });

  it('Verify Select with view more button', () => {
    cy.clock();
    cy.get('#view-more-typeahead-select').click();
    cy.get('.pf-v5-c-select__menu').contains('View more');
    cy.get('.pf-m-load').should('exist');
    cy.get('button.pf-v5-c-select__menu-item.pf-m-load').click();
    cy.get('.pf-m-loading').should('exist');
    cy.tick(16000);
    cy.get('.pf-m-load').should('not.exist');
    cy.get('.pf-m-loading').should('not.exist');
    cy.get('#view-more-typeahead-select').click();
  });
});
