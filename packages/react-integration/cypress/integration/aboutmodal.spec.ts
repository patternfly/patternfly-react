describe('About Modal Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/about-modal-demo-nav-link');
  });

  it('Open + close about modal', () => {
    cy.get('#modal-button').click();
    cy.get('.pf-v5-c-about-modal-box').should('exist');
    cy.get('.pf-v5-c-button[aria-label="Close Dialog"]').click();
    cy.get('.pf-v5-c-about-modal-box').should('not.exist');
  });
});
