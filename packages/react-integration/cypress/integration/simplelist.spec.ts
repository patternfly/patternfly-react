describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#simple-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/simple-list-demo-nav-link');
  });

  it('Select second item', () => {
    cy.get('#simple-list-demo > ul > :nth-child(1) > button').should('have.class', 'pf-m-current');
    cy.get('#simple-list-demo > ul > :nth-child(2) > button').should('not.have.class', 'pf-m-current');

    cy.get('#simple-list-demo > ul > :nth-child(2) > button').click();

    cy.get('#simple-list-demo > ul > :nth-child(1) > button').should('not.have.class', 'pf-m-current');
    cy.get('#simple-list-demo > ul > :nth-child(2) > button').should('have.class', 'pf-m-current');
  });
});
