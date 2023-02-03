describe('Expandable Section Truncate Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/expandable-section-truncate-demo-nav-link');
  });

  it('Verify basic truncation expansion', () => {
    cy.get('#expandable-section-truncate button').click();
    cy.get('#expandable-section-truncate').should('have.class', 'pf-m-expanded');
  });

  it('Verify toggle button renders conditionally', () => {
    cy.get('#expandable-section-truncate-resizable button').should('not.exist');
    cy.viewport(400, 660);
    cy.get('#expandable-section-truncate-resizable button')
      .should('exist')
      .click();
    // Want to verify resizing doesn't remove the toggle button
    cy.get('#expandable-section-truncate button').should('exist');
    cy.viewport(800, 660);
    cy.get('#expandable-section-truncate-resizable button').should('not.exist');
  });
});
