describe('Input Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#input-group-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/input-group-demo-nav-link');
  });
  it('Verify text input', () => {
    cy.get('#textarea1').type('Hi');
    cy.get('#textarea1').should('have.value', 'Hi');
  });

  it('Verify number input only allows numbers', () => {
    cy.get('#textInput5').type('Hi');
    cy.get('#textInput5').should('have.value', ''); 
  });
})