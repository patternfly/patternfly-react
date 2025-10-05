describe('Page Demo Test', () => {
  it('Navigate to page section', () => {
    cy.visit('http://localhost:3000/page-demo-nav-link');
  });

  it('Test Page elements', () => {
    cy.get('#page-demo').within(() => {
      cy.get('#nav-toggle').then((hamburgerIcon: JQuery<HTMLDivElement>) => {
        cy.get('#page-demo-sidebar').then(($sidebar) => {
          const initiallyCollapsed = $sidebar.hasClass('pf-m-collapsed');
          cy.wrap(hamburgerIcon).click();
          if (initiallyCollapsed) {
            cy.get('#page-demo-sidebar').should('not.have.class', 'pf-m-collapsed');
          } else {
            cy.get('#page-demo-sidebar').should('have.class', 'pf-m-collapsed');
          }
          cy.wrap(hamburgerIcon).click();
          if (initiallyCollapsed) {
            cy.get('#page-demo-sidebar').should('have.class', 'pf-m-collapsed');
          } else {
            cy.get('#page-demo-sidebar').should('not.have.class', 'pf-m-collapsed');
          }
        });
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
