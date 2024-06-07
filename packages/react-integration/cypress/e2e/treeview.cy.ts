describe('TreeView Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/treeview-demo-nav-link');
  });

  it('Verify expand/collapse all', () => {
    cy.get('#App1').should('exist');
    cy.get('#expand').click();
    cy.get('#expand').click();
    cy.get('#App1').should('not.exist');
    cy.get('#expand').click();
    cy.get('#App1').should('exist');
  });

  it('Verify treeview', () => {
    cy.get('#basic').should('exist');
    cy.get('#App1').should('exist');
    cy.get('#App1').click();
    cy.get('#App1Settings').should('exist');
    cy.get('#App1Settings').click();
    cy.get('#App1Settings .pf-v5-c-tree-view__node').should('have.class', 'pf-m-current');
    cy.get('#input-search').type('Sources');
    cy.get('#App1').should('not.exist');
    cy.get('#Sources').should('exist');
    cy.get('#mixed').should('exist');
    cy.get(
      '#FCost > :nth-child(1) > .pf-v5-c-tree-view__node > .pf-v5-c-tree-view__node-container > .pf-v5-c-tree-view__node-count > .pf-v5-c-badge'
    ).contains('custom badge');
  });

  it.skip('Verify treeview keyboard interactions', () => {
    cy.get('#input-search').type('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');
    cy.get('#basic').should('exist');
    cy.get('#App1').should('exist');
    cy.get('#App1 > .pf-v5-c-tree-view__content > .pf-v5-c-tree-view__node').type('{rightArrow}');
    cy.get('#App1Settings').should('exist');
    cy.get('#App1Current').should('exist');
    cy.get('#App1 > .pf-v5-c-tree-view__content > .pf-v5-c-tree-view__node').type('{downArrow}{leftArrow}{leftArrow}');
    cy.get('#App1Settings').should('not.exist');
    cy.get('#App1Current').should('not.exist');
    cy.get('#App1 > .pf-v5-c-tree-view__content > .pf-v5-c-tree-view__node').type('{upArrow}');
  });
});
