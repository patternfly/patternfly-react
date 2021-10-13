describe('Label Group Compact Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/labelgroup-compact-demo-nav-link');
  });

  it('Verify compact overflow label', () => {
    cy.get('.pf-c-label-group')
      .find('.pf-c-label.pf-c-compact')
      .should('have.class', 'pf-m-compact');
  });
});
