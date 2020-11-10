describe('Touchspin Demo Test', () => {
  it('Navigate to touchspin section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#touchspin-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/touchspin-demo-nav-link');
  });

  it('has initial value of 0 & shows min threshold', () => {
    cy.get('#input1').should('have.value', 0);
    cy.get('#minus-button').should('be.disabled');
    cy.get('#plus-button').should('not.be.disabled');
  });

  it('can be incremented with the plus button & shows max threshold', () => {
    cy.get('#plus-button').click();
    cy.get('#minus-button').should('not.be.disabled');
    cy.get('#input1').should('have.value', 1);
    cy.get('#plus-button').click();
    cy.get('#plus-button').click();
    cy.get('#input1').should('have.value', 3);
    cy.get('#plus-button').should('be.disabled');
  });

  it('can be decremented with the minus button', () => {
    cy.get('#minus-button').click();
    cy.get('#input1').should('have.value', 2);
    cy.get('#minus-button').should('not.be.disabled');
    cy.get('#plus-button').should('not.be.disabled');
  });

  it('can be manually set with input', () => {
    cy.get('#input1')
      .clear()
      .type(1);
    cy.get('#input1').should('have.value', 1);
    cy.get('#minus-button').should('not.be.disabled');
    cy.get('#plus-button').should('not.be.disabled');
  });
});
