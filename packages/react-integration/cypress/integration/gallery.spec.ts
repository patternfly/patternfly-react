describe('Gallery Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#gallery-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/gallery-demo-nav-link');
  });
  it('Verify gallery item', () => {
    cy.get('.pf-c-page__main-section')
      .find('div')
      .first()
      .should('have.class', 'pf-l-gallery');
  });

  it('Verify gutters', () => {
    cy.get('.pf-l-gallery').should('have.class', 'pf-m-gutter');
  });
});
