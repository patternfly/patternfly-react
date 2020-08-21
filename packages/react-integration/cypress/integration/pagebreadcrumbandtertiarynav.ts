describe('Page Breadcrumb and Nav Demo Test', () => {
  it('Navigate to page section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#page-breadcrumb-and-tertiary-nav-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/page-breadcrumb-and-tertiary-nav-demo-nav-link');
  });

  it('Test Page elements', () => {
    cy.get('#page-breadcrumb-and-tertiary-nav-demo').within(() => {
      cy.get('div[class="pf-c-page__header-brand-link"]')
        .invoke('text')
        .should('eq', "Logo that's a <div>");
      cy.get('.pf-c-page__header-tools')
        .invoke('text')
        .should('contain', 'PageHeaderTools | Avatar');
      cy.get('.pf-c-page__main-nav').should('have.class', 'pf-m-limit-width');
      cy.get('.pf-c-page__main-nav')
        .children('.pf-c-page__main-body')
        .should('exist');
      cy.get('.pf-c-nav').should('have.class', 'pf-m-tertiary');
      cy.get('.pf-c-page__main-section.pf-m-dark-100').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-dark-200').should('exist');
      cy.get('.pf-c-page__main-section.pf-m-light').should('exist');
    });
  });
});
