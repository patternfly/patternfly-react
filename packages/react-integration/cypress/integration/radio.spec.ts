describe('Radio Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/radio-demo-nav-link');
  });

  it('Verify controlled radio', () => {
    cy.get('#radio-2').should('be.checked');
    cy.get('#radio-1').check();
    cy.get('#radio-2').should('not.be.checked');
    cy.get('#radio-1').should('be.checked');
  });

  it('Verify uncontrolled radio', () => {
    cy.get('[for="radio-3"]').contains('Uncontrolled radio 1');
    cy.get('[for="radio-4"]').contains('Uncontrolled radio 2');
  });

  it('Verify disabled radio', () => {
    cy.get('#radio-5').should('be.checked');
    cy.get('#radio-5').should('be.disabled');
    cy.get('#radio-6').should('not.be.checked');
    cy.get('#radio-6').should('be.disabled');
  });

  it('Verify body content', () => {
    cy.get('#not-standalone-container').within(() => {
      cy.get('.pf-v5-c-radio__body').contains('this is the radio body');
    });
  });

  it('Verify standalone radio input', () => {
    cy.get('#standalone-container').within(() => {
      cy.get('div.pf-v5-c-radio.pf-m-standalone').should('exist');
    });
    cy.get('#not-standalone-container').within(() => {
      cy.get('div.pf-v5-c-radio.pf-m-standalone').should('not.exist');
    });
  });
});
