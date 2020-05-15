describe('Drawer Demo Test', () => {
  it('Navigate to the drawer demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#drawer-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/drawer-demo-nav-link');
  });

  it('Verify text in content', () => {
    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    cy.get('.pf-c-drawer').contains(drawerContent);
  });

  it('Verify drawer expands and collapses', () => {
    cy.get('.pf-c-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
    cy.get('.pf-c-drawer').should('have.class', 'pf-m-expanded');
  });

  it('Verify panel widths', () => {
    // Large viewport
    const $drawerPanel = cy.get('.pf-c-drawer__panel');
    $drawerPanel.should('have.class', 'pf-m-width-100');
    $drawerPanel.should('have.class', 'pf-m-width-50-on-lg');
    $drawerPanel.should('have.class', 'pf-m-width-33-on-xl');
    $drawerPanel.should('have.class', 'pf-m-width-25-on-2xl');
    $drawerPanel.should('have.css', 'flex-basis', '33%');
    // Medium viewport
    cy.viewport(800, 660);
    cy.get('.pf-c-drawer__panel').should('have.css', 'flex-basis', '100%');
    // Xl viewport
    cy.viewport(1200, 660);
    cy.get('.pf-c-drawer__panel').should('have.css', 'flex-basis', '33%');
    // 2Xl viewport
    cy.viewport(1450, 660);
    cy.get('.pf-c-drawer__panel').should('have.css', 'flex-basis', '25%');
  });
});
