describe('VerticalTabs Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#vertical-tabs-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/vertical-tabs-demo-nav-link');
  });

  // Component is designed to preventDefault on <a/> clicks, desired behavior
  // is to right click a VerticalTabsTab and open links in new browser tab
  // Instead extract URL and cy.visit() to verify
  it('Navigate to internal link', () => {
    cy.get('#about > a').then(link => {
      cy.visit(link.prop('href'));
      cy.url().should('eq', 'http://localhost:3000/components/about-modal');
    });
  });

  // Currently visiting multiple domains in one test is not supported
  // Open issue: https://github.com/cypress-io/cypress/issues/9
  it('Request external link', () => {
    cy.visit('http://localhost:3000/vertical-tabs-demo-nav-link');
    cy.get('#redhat > a').then(link => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200);
    });
  });
});
