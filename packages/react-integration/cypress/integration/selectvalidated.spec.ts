describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-validated-demo-nav-link');
  });

  it('Verify Validated Select', () => {
    cy.get('#select-validated-demo .pf-c-select').should('not.have.class', 'pf-m-invalid');
    cy.get('#select-validated-demo .pf-c-select').should('not.have.class', 'pf-m-success');
    cy.get('#select-validated-demo .pf-c-select').should('not.have.class', 'pf-m-warning');
    cy.get('#validated-select').click();
    cy.get('#Miss > .pf-c-select__menu-item').click();
    cy.get('#select-validated-demo .pf-c-select').should('have.class', 'pf-m-success');
    cy.get('#validated-helper').contains('success');
    cy.get('#validated-select').click();
    cy.get('#Choose\\.\\.\\. > .pf-c-select__menu-item').click();
    cy.get('#select-validated-demo .pf-c-select:first').should('have.class', 'pf-m-invalid');
    cy.get('#validated-helper').contains('error');
    cy.get('#validated-select').click();
    cy.get('#Other > .pf-c-select__menu-item').click();
    cy.get('#select-validated-demo .pf-c-select:first').should('have.class', 'pf-m-warning');
    cy.get('#validated-helper').contains('warning');
  });
});
