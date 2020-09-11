describe('Skeleton Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#skeleton-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/skeleton-demo-nav-link');
  });
  it('Verify skeleton', () => {
    cy.get('#skele-w25').should('have.class', 'pf-c-skeleton');
  });
  it('Verify circle skeleton', () => {
    cy.get('#skele-circle').should('have.class', 'pf-m-circle');
  });
  it('Verify square skeleton', () => {
    cy.get('#skele-square').should('have.class', 'pf-m-square');
  });
});
