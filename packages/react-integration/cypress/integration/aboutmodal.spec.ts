describe('About Modal Demo Test', () => {
  before(() => {
    cy.visit('http://localhost:3000/about-modal-demo-nav-link');
  });
  it('Open + close about modal', () => {
    cy.get('#modal-button').click();
    cy.get('.pf-v6-c-about-modal-box').should('exist');
    cy.get('.pf-v6-c-button[aria-label="Close Dialog"]').click();
    cy.get('.pf-v6-c-about-modal-box').should('not.exist');
  });
});
