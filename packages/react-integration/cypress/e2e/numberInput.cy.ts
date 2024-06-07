describe('NumberInput Demo Test', () => {
  it('Navigate to numberInput section', () => {
    cy.visit('http://localhost:3000/numberInput-demo-nav-link');
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
    cy.get('#input1').type('{selectall}').type('1');
    cy.get('#input1').should('have.value', 1);
    cy.get('#minus-button').should('not.be.disabled');
    cy.get('#plus-button').should('not.be.disabled');
  });

  it('is properly disabled', () => {
    cy.get('#input2').should('be.disabled');
    cy.get('#minus-button2').should('be.disabled');
    cy.get('#plus-button2').should('be.disabled');
  });

  it('can have different unit positions', () => {
    cy.get('#numberInput1').children().first().should('have.class', 'pf-v5-c-input-group');
    cy.get('#numberInput1').children().last().should('have.class', 'pf-v5-c-number-input__unit');
    cy.get('#numberInput2').children().first().should('have.class', 'pf-v5-c-number-input__unit');
    cy.get('#numberInput2').children().last().should('have.class', 'pf-v5-c-input-group');
  });

  it('initial undefined value can be increment with the plus button', () => {
    cy.get('#input3').should('have.value', 0);
    cy.get('#plus-button3').click();
    cy.get('#input3').should('have.value', 1);
  });

  it('out of bounds input value can be typed and snap to nearest threshold', () => {
    cy.get('#input3').should('have.value', 1);
    cy.get('#input3').type('5');
    cy.get('body').click();
    cy.get('#input3').should('have.value', 3);
  });
});
