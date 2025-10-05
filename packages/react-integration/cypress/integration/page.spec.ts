describe('Page Demo Test', () => {
  it('Navigate to page section', () => {
    cy.visit('http://localhost:3000/page-demo-nav-link');
  });

  it('Test Page elements', () => {
    cy.get('#page-demo').within(() => {
      cy.get('#nav-toggle').then((hamburgerIcon: JQuery<HTMLDivElement>) => {
        cy.get('.pf-v6-c-page__sidebar.pf-m-expanded').should('not.exist');
        cy.get('.pf-v6-c-page__sidebar.pf-m-collapsed').should('exist');
        cy.wrap(hamburgerIcon).click();
        cy.get('.pf-v6-c-page__sidebar.pf-m-collapsed').should('not.exist');
        cy.get('.pf-v6-c-page__sidebar.pf-m-expanded').should('exist');
      });
      cy.get('#page-demo-masthead').should('not.have.attr', 'role');
      cy.get('#page-demo-page-id').should('not.have.attr', 'role');
      cy.get(
        '#page-demo-masthead > .pf-v6-c-masthead__main > .pf-v6-c-masthead__brand > .pf-v6-c-masthead__logo'
      ).should('exist');
      cy.get('.pf-v6-c-page__main-section.pf-m-no-padding').should('exist');
      cy.get('.pf-v6-c-page__main-section.pf-m-no-padding-on-md').should('exist');
    });
  });
});
