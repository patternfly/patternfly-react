describe('Divider Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#divider-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/divider-demo-nav-link');
  });

  it('Verify divider with hr', () => {
    cy.get('hr.pf-c-divider').should('exist');
  });

  it('Verify divider with li', () => {
    cy.get('div.pf-c-divider').should('have.attr', 'role', 'separator');
  });

  it('Verify divider with div', () => {
    cy.get('li.pf-c-divider').should('have.attr', 'role', 'separator');
  });

  it('Verify vertical divider', () => {
    cy.get('.pf-c-divider#vertical-divider').should('have.class', 'pf-m-vertical');
  });
});
