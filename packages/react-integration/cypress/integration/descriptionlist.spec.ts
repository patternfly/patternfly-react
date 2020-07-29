describe('Description List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#description-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/description-list-demo-nav-link');
  });

  it('Verify default list and group', () => {
    cy.get('.pf-c-description-list')
      .should('exist')
      .children('.pf-c-description-list__group');
  });

  it('Verify text', () => {
    cy.get('.pf-c-description-list__term').contains('Name');
  });

  it('Verify description', () => {
    cy.get('.pf-c-description-list__description').contains('Example');
  });

  it('Verify Responsive Description List', () => {
    cy.get('.pf-c-description-list[id="responsive-description-list"]').should(
      'have.class',
      'pf-m-2-col-on-lg pf-m-3-col-on-xl'
    );
  });

  it('Verify Horizontal Description List', () => {
    cy.get('.pf-c-description-list[id="horizontal-description-list"]').should('have.class', 'pf-m-horizontal');
  });

  it('Verify Auto Column Widths Description List', () => {
    cy.get('.pf-c-description-list[id="auto-col-widths-description-list"]').should(
      'have.class',
      'pf-m-auto-column-widths'
    );
  });

  it('Verify Inline Grid Description List', () => {
    cy.get('.pf-c-description-list[id="inline-grid-description-list"]').should('have.class', 'pf-m-inline-grid');
  });
});
