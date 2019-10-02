describe('Drawer Demo Test', () => {
  it('Navigate to the drawer demo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#drawer-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/drawer-demo-nav-link');
  });

  it('Verify text in content', () => {
    const drawerContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

    cy.get('.pf-c-drawer__content').contains(drawerContent);
  });

  it('Verify drawer expands and collapses', () => {
    cy.get('.pf-c-drawer').should('not.have.class', 'pf-m-expanded');
    cy.get('#toggleButton').click();
    cy.get('.pf-c-drawer').should('have.class', 'pf-m-expanded');
  });
});
