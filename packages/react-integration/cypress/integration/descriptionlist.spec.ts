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

  it('Verify 2 Col Description List', () => {
    cy.get('.2-col-description-list').should('have.class', 'pf-m-2-col');
  });

  it('Verify 3 Col On Md Description List', () => {
    cy.get('.3-col-on-md-description-list').should('have.class', 'pf-m-3-col-on-md');
  });

  it('Verify 2 Col On 2xl Description List', () => {
    cy.get('.2-col-on-2xl-description-list').should('have.class', 'pf-m-2-col-on-2xl');
  });

  it('Verify Responsive Description List', () => {
    cy.get('.responsive-description-list').should('have.class', 'pf-m-2-col-on-lg pf-m-3-col-on-xl');
  });

  it('Verify Horizontal Description List', () => {
    cy.get('.horizontal-description-list').should('have.class', 'pf-m-horizontal');
  });

  it('Verify Auto Column Widths Description List', () => {
    cy.get('.auto-col-widths-description-list').should('have.class', 'pf-m-auto-column-widths');
  });

  it('Verify Inline Grid Description List', () => {
    cy.get('.inline-grid-description-list').should('have.class', 'pf-m-inline-grid');
  });
});
