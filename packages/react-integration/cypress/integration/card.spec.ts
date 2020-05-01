describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
  });

  it('Verify default title', () => {
    cy.get('.pf-c-card__title').contains('Header');
  });

  it('Verify default body content', () => {
    cy.get('.pf-c-card__body').contains('Body');
  });

  it('Verify card is hoverable', () => {
    cy.get('article')
      .first()
      .should('have.class', 'pf-m-hoverable');
  });

  it('Verify card is compact', () => {
    cy.get('article')
      .eq(1)
      .should('have.class', 'pf-m-compact');
  });

  it('Verify card is selectable and selected', () => {
    cy.get('article')
      .eq(2)
      .should('have.class', 'pf-m-selected')
      .should('have.class', 'pf-m-selectable');
  });

  it('Verify card is flat', () => {
    cy.get('article')
      .last()
      .should('have.class', 'pf-m-flat');
  });
});
