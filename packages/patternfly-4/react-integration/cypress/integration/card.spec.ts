describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
  }); 

  it('Verify default header', () => {
    cy.get('.pf-c-card__header').contains('Header')
  }); 

  it('Verify default body content', () => {
    cy.get('.pf-c-card__body').contains('Body')
  }); 

  it('Verify card is hoverable', () => {
    cy.get('article').first().should('have.class', 'pf-m-hoverable')
  });

  it('Verify card is compact', () => {
    cy.get('article').last().should('have.class', 'pf-m-compact')
  });
})