describe('Progress Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#progress-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/progress-demo-nav-link');
  });

  it('Verify simple progress', () => {
    cy.get('#simple-progress-description').contains('Simple progress');
    cy.get('#simple-progress .pf-c-progress__status .pf-c-progress__measure').contains('33%');
  });

  it('Verify truncate progress', () => {
    cy.get('#truncate-title-progress-description.pf-m-truncate').should('exist');
  });

  it('Verify progress element variant classes', () => {
    cy.get('div[id="warning-progress"]').should('have.class', 'pf-m-warning');
    cy.get('div[id="danger-progress"]').should('have.class', 'pf-m-danger');
    cy.get('div[id="success-progress"]').should('have.class', 'pf-m-success');
  });
});
