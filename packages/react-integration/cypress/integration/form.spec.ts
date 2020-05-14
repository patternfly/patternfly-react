describe('Form Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#form-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/form-demo-nav-link');
  });

  it('Verify default value content', () => {
    cy.get('#age')
      .first()
      .should('have.value', 'Five');
  });

  it('Verify form allows correct input', () => {
    cy.get('#age')
      .first()
      .clear()
      .type('5');
    cy.get('.pf-c-form__helper-text').contains('Please write your age');
  });

  it('Verify form identifies input error', () => {
    cy.get('#age')
      .first()
      .clear()
      .type('Something');
    cy.get('.pf-c-form__helper-text').contains('Age has to be a number');
  });

  it('Verify form validates form group', () => {
    cy.get('#age-validated.pf-m-success').should('not.exist');
    cy.get('.pf-c-form__helper-text').contains('Enter age');
    // type string that is not a number so it is not invalid
    cy.get('#age-validated').type('hi');
    cy.get('#age-validated').should('have.value', 'hi');
    cy.get('#age-validated').then(textinput => {
      expect(textinput.attr('aria-invalid')).to.be.equal('true');
    });
    cy.get('.pf-c-form__helper-text.pf-m-error').contains('Age must be a number');
    cy.get('#age2-helper.pf-m-error').should('exist');
    // Clear text input and enter valid number
    cy.get('#age-validated')
      .clear()
      .type('34')
      .should('have.value', '34');
    cy.get('#age2-helper.pf-m-success').should('exist');
    cy.get('#age-validated.pf-m-success').should('exist');
    cy.get('.pf-c-form__helper-text.pf-m-success').contains('Enter age');
    cy.get('#age-validated').then(textinput => {
      expect(textinput.attr('aria-invalid')).to.be.equal('false');
    });
  });

  it('Verify form group label has no top spacer', () => {
    cy.get('.pf-c-form__group-label').should('have.class', 'pf-m-no-padding-top');
  });

  it('Verify selecting the form label help icon launches popover', () => {
    cy.get('#helper-text-target')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get('.tippy-popper').should('exist');
  });
});
