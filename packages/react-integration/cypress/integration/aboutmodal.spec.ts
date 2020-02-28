describe('About Modal Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#about-modal-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/about-modal-demo-nav-link');
  });

  it('Open + close about modal', () => {
    cy.get('#modal-button').click();
    cy.get('.pf-c-about-modal-box').should('exist');
    cy.get('.pf-c-button[aria-label="Close Dialog"]').click();
    cy.get('.pf-c-about-modal-box').should('not.exist');
  });
});
