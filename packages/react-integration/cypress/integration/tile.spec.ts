describe('Title Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#tile-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/tile-demo-nav-link');
  });

  it('Verify basic tile', () => {
    cy.get('#basic').should('have.class', 'pf-c-tile');
  });

  it('Verify selected tile', () => {
    cy.get('#selected').should('have.class', 'pf-m-selected');
  });

  it('Verify disabled tile', () => {
    cy.get('#disabled').should('have.class', 'pf-m-disabled');
  });

  it('Verify subtext', () => {
    cy.get('#subtext .pf-c-tile__body').should('exist');
  });

  it('Verify icon', () => {
    cy.get('#icon .pf-c-tile__header .pf-c-tile__icon').should('exist');
  });

  it('Verify stacked icon', () => {
    cy.get('#stacked-icon .pf-c-tile__header').should('have.class', 'pf-m-stacked');
  });

  it('Verify large stacked icon', () => {
    cy.get('#large-icon').should('have.class', 'pf-m-display-lg');
  });
});
