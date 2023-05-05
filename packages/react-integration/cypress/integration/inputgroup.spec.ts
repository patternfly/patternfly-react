describe('Input Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/input-group-demo-nav-link');
  });
  it.skip('Verify text input', () => {
    cy.get('#textarea1').type('Hi');
    cy.get('#textarea1').should('have.value', 'Hi');
  });

  it('Verify number input only allows numbers', () => {
    const text = cy.get('#textInput5');
    text.type('Hi');
    text.should('have.value', '');
    text.type('13');
    text.should('have.value', '13');
  });
});
