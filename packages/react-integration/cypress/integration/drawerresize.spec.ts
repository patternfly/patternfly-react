describe('Drawer Resize Demo Test', () => {
  it('Navigate to the drawer demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#drawer-resize-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/drawer-resize-demo-nav-link');
  });

  it('Verify resizable drawer', () => {
    cy.get('.pf-c-drawer__panel').should('have.css', 'flex-basis', 'max(0% + 24px, min(0% + 200px, 100% + 0px))');
    cy.get('.pf-c-drawer__panel').should('have.class', 'pf-m-resizable');
    cy.get('.pf-c-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
    cy.get('.pf-c-drawer').should('have.class', 'pf-m-expanded');
    cy.get('.pf-c-drawer__panel').should('not.have.css', 'overflow-anchor', 'none');
    cy.get('.pf-c-drawer__splitter')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 300 })
      .trigger('mouseup', { force: true });
    cy.get('.pf-c-drawer__panel').should('have.css', 'overflow-anchor', 'none');
    cy.get('.pf-c-drawer__splitter')
      .trigger('keydown', { keyCode: 32, which: 32 })
      .trigger('keydown', { keyCode: 40, which: 40 })
      .trigger('keydown', { keyCode: 40, which: 40 })
      .trigger('keydown', { keyCode: 40, which: 40 });
  });
});
