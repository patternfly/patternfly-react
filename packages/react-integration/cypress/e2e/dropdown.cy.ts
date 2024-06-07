describe('Dropdown demo test', () => {
  it('navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-demo-nav-link');
  });

  // mouse interactions
  it('opens/closes dropdown menu when clicked', () => {
    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="toggle"]').should('have.class', 'pf-m-expanded');
    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  });

  it('closes dropdown when clicked outside', () => {
    cy.get('[data-cy="toggle"]').click();
    cy.get('main').click(0, 0);
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  });

  it('closes dropdown when dropdown item clicked', () => {
    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="dropdown-item"]').click();
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  });

  // keyboard interactions
  it('closes dropdown on pressing esc, focus stays on the toggle', () => {
    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="toggle"]').trigger('keydown', { key: 'Escape' });
    cy.get('[data-cy="toggle"]').should('be.focused');
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  });

  it('closes dropdown on pressing tab, focus stays on the toggle', () => {
    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="toggle"]').trigger('keydown', { key: 'Tab' });
    cy.get('[data-cy="toggle"]').should('be.focused');
    cy.get('[data-cy="toggle"]').should('not.have.class', 'pf-m-expanded');
  });

  /* 
    pressing enter or space key on a button calls a click event internally
    so testing for a button click should be sufficient
  */
});
