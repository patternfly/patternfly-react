describe('List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/list-demo-nav-link');
  });

  it('Verify basic list', () => {
    cy.get('.pf-c-list li').contains('I am a basic list item');
  });

  it('Verify inline list', () => {
    cy.get('.pf-m-inline li').contains('I am an inline list item');
  });

  it('Verify ordered list', () => {
    cy.get('ol.pf-c-list li').contains('I am an ordered list item');
  });

  it('Verify bordered list', () => {
    cy.get('#list-bordered').should('have.class', 'pf-m-bordered');
  });

  it('Verify plain list', () => {
    cy.get('#list-plain').should('have.class', 'pf-m-plain');
  });

  it('Verify icon list', () => {
    cy.get('#list-icon')
      .children('.pf-c-list__item')
      .should('exist')
      .children('.pf-c-list__item-icon')
      .should('exist');
  });

  it('Verify icon large list', () => {
    cy.get('#list-icon-large').should('have.class', 'pf-m-icon-lg');
  });
});
