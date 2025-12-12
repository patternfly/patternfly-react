describe('Drawer Demo Test', () => {
  it('Navigate to the drawer demo', () => {
    cy.visit('http://localhost:3000/drawer-demo-nav-link');
  });

  it('Verify focus is automatically handled with focus trap enabled', () => {
    cy.get('#toggleFocusTrapButton').click();
    cy.get('#focusTrap-panelContent .pf-v6-c-button.pf-m-plain').should('have.focus');
    cy.get('#focusTrap-panelContent .pf-v6-c-button.pf-m-plain').click();
    cy.get('#toggleFocusTrapButton').should('have.focus');
  });

  it('Verify focus can be customized with focus trap enabled', () => {
    cy.get('#toggleCustomFocusButton').click();
    // Wait for transition animation to end
    cy.wait(500);
    cy.get('#customFocus-panelContent').should('have.focus');
    cy.get('#toggleCustomFocusButton').click();
  });

  it('Verify text in content', () => {
    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    cy.get('#basic-drawer.pf-v6-c-drawer').contains(drawerContent);
  });

  it('Verify drawer expands and collapses', () => {
    cy.get('#basic-drawer.pf-v6-c-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
    cy.get('#basic-drawer.pf-v6-c-drawer').should('have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
  });

  it('Verify bottom drawer with background variant', () => {
    cy.get('#basic-drawer.pf-v6-c-drawer').should('have.class', 'pf-m-panel-bottom');
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.class', 'pf-m-secondary');
  });

  it('Verify panel widths', () => {
    // Large viewport
    const $drawerPanel = cy.get('#basic-drawer .pf-v6-c-drawer__panel');
    $drawerPanel.should('have.class', 'pf-m-width-100');
    $drawerPanel.should('have.class', 'pf-m-width-50-on-lg');
    $drawerPanel.should('have.class', 'pf-m-width-33-on-xl');
    $drawerPanel.should('have.class', 'pf-m-width-25-on-2xl');
    $drawerPanel.should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
    // Medium viewport
    cy.viewport(800, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(100% + 0px, 100%))');
    // Xl viewport
    cy.viewport(1200, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
    // 2Xl viewport
    cy.viewport(1450, 660);
    cy.get('#basic-drawer .pf-v6-c-drawer__panel').should('have.css', 'flex-basis', 'max(24px, min(300px, 100%))');
  });

  it('Verify that focus gets sent to drawer', () => {
    cy.get('#toggleButton').click();
    cy.wrap(() => cy.focused().contains('drawer-panel in demo with onExpand'), { timeout: 1000 });
  });
});
