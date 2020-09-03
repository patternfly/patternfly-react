describe('TreeView Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#treeview-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/treeview-demo-nav-link');
  });

  it('Verify treeview', () => {
    cy.get('#basic').should('exist');
    cy.get('#App1').should('exist');
    cy.get('#App1').click();
    cy.get('#App1 .pf-c-tree-view__node').should('have.class', 'pf-m-active');
    cy.get('#App1Settings').should('exist');
    cy.get('#App1Settings').click();
    cy.get('#App1Settings .pf-c-tree-view__node').should('have.class', 'pf-m-current');
    cy.get('#input-search').type('Sources');
    cy.get('#App1').should('not.exist');
    cy.get('#Sources').should('exist');
    cy.get('#mixed').should('exist');
  });
});
