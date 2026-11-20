describe('Page Managed Sidebar Closed Demo Test', () => {
  it('Navigate to page section', () => {
    cy.visit('http://localhost:3000/page-managed-sidebar-closed-demo-nav-link');
  });

  it('Test Page elements', () => {
    cy.get('#page-managed-sidebar-closed-demo').within(() => {
      cy.get('#uncontrolled-nav-toggle').then((hamburgerIcon: JQuery<HTMLDivElement>) => {
        cy.get('.pf-v6-c-page__sidebar.pf-m-collapsed').should('exist');
        cy.get('.pf-v6-c-page__sidebar.pf-m-expanded').should('not.exist');
        cy.wrap(hamburgerIcon).click();
        cy.get('.pf-v6-c-page__sidebar.pf-m-collapsed').should('not.exist');
        cy.get('.pf-v6-c-page__sidebar.pf-m-expanded').should('exist');
      });
      cy.get('div[class="pf-v6-c-masthead__brand"]').invoke('text').should('eq', "Logo that's a div");
      cy.get('.pf-v6-c-masthead__content').invoke('text').should('contain', 'header-tools | Avatar');
    });
  });

  it('skips the sidebar link when collapsed and reaches it when expanded', { browser: '!firefox' }, () => {
    cy.viewport(390, 792);
    cy.visit('http://localhost:3000/page-managed-sidebar-closed-demo-nav-link');

    cy.get('#uncontrolled-sidebar').should('have.attr', 'aria-hidden', 'true');
    cy.get('#uncontrolled-nav-toggle').focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.focused().should('have.text', 'Main content link');

    cy.get('#uncontrolled-nav-toggle').click();
    cy.get('#uncontrolled-sidebar').should('have.attr', 'aria-hidden', 'false');
    cy.get('#uncontrolled-nav-toggle').focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get('#uncontrolled-sidebar a').should('have.focus');
  });
});
