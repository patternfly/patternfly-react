describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#select-view-more-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/select-view-more-demo-nav-link');
  });

  it('Verify Select with view more button', () => {
    cy.get('#view-more-select').click();
    cy.get('.pf-c-select__menu').contains('View more');
    cy.get('.pf-m-load').should('exist');
    cy.get('button.pf-c-select__menu-item.pf-m-load').click();
    cy.get('.pf-m-loading').should('exist');
    cy.wait(16000).then(() => {
      cy.get('.pf-m-load').should('exist');
      cy.get('.pf-m-loading').should('not.exist');
    });
    cy.get('#view-more-select').click();
  });

  it('Verify Select with view more button checkboxes', () => {
    cy.get('#view-more-select-check').click();
    cy.get('.pf-c-select__menu').contains('View more');
    cy.get('.pf-m-load').should('exist');
    cy.get('button.pf-c-select__menu-item.pf-m-load').click();
    cy.get('.pf-m-loading').should('exist');
    cy.wait(16000).then(() => {
      cy.get('.pf-m-load').should('exist');
      cy.get('.pf-m-loading').should('not.exist');
    });
  });
});
