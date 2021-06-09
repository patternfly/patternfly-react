describe('Hint Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#helper-text-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/helper-text-demo-nav-link');
  });

  it('Verify default helper text', () => {
    cy.get('#default-container.pf-c-helper-text').should('exist');
    cy.get('#default .pf-c-helper-text__item-text').should('exist');
    cy.get(`#default .pf-c-helper-text__item-icon`).should('exist');
  });

  ['indeterminate', 'warning', 'success', 'invalid'].forEach(variant => {
    it(`Verify ${variant} helper text`, () => {
      cy.get(`#${variant}.pf-m-${variant}`).should('exist');
      cy.get(`#${variant} .pf-c-helper-text__item-text`).should('exist');
      cy.get(`#${variant} .pf-c-helper-text__item-icon`).should('exist');
    });
  });
});
