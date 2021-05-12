describe('MenuToggle Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#menu-toggle-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/menu-toggle-demo-nav-link');
  });

  it('Verify basic', () => {
    cy.get('#collapsed').should('have.class', 'pf-c-menu-toggle');
  });

  it('Verify styling props', () => {
    cy.get('#expanded').should('have.class', 'pf-m-expanded');
    cy.get('#disabled').should('have.attr', 'disabled');
    cy.get('#primary').should('have.class', 'pf-m-primary');
    cy.get('#plain').should('have.class', 'pf-m-plain');
  });

  it('Verify icon toggle', () => {
    cy.get('#collapsed .pf-c-menu-toggle__icon').should('not.exist');
    cy.get('#icon .pf-c-menu-toggle__icon').should('exist');
  });

  it('Verify badge toggle', () => {
    cy.get('#collapsed .pf-c-menu-toggle__count').should('not.exist');
    cy.get('#badge .pf-c-menu-toggle__count').should('exist');
  });
});
