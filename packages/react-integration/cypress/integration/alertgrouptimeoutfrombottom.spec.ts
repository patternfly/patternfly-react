describe('Alert Group Timeout From Bottom Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/alert-group-timeout-from-bottom-demo-nav-link');
  });

  it.skip('Adds new alerts from the top of the page down', () => {
    cy.contains('Add alert').click();
    cy.wait(1000);
    cy.contains('Add alert').click();
    cy.wait(1000);
    cy.contains('Add alert').click();
    cy.get('.pf-v5-c-alert').first().contains('Alert no. 2');
    cy.get('.pf-v5-c-alert').last().contains('Alert no. 0');
  });

  it.skip('Removes the alerts in the order they appeared', () => {
    cy.wait(1000);
    cy.get('.pf-v5-c-alert').first().contains('Alert no. 2');
    cy.get('.pf-v5-c-alert').last().contains('Alert no. 1');
    cy.wait(1000);
    cy.get('.pf-v5-c-alert').first().contains('Alert no. 2');
    cy.get('.pf-v5-c-alert').last().contains('Alert no. 2');
  });
});
