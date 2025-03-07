describe('About Modal Demo Test', () => {
  it('Open + close about modal', () => {
    cy.visit('http://localhost:3000/about-modal-demo-nav-link');
    cy.get('#modal-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('.pf-v6-c-about-modal-box').should('exist');
    cy.get('.pf-v6-c-button[aria-label="Close Dialog"]').click();
    cy.get('.pf-v6-c-about-modal-box').should('not.exist');
  });
});
