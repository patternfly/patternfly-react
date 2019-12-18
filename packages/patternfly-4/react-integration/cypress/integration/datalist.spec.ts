describe('Data List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#data-list-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/data-list-demo-nav-link');
  });

  it('Verify header', () => {
    cy.get('#simple-item1').contains('Primary content');
    cy.get('#simple-item2').contains('Secondary content');
  });

  it('Verify body content', () => {
    cy.get('#simple-item3').contains('Secondary content (pf-m-no-fill)');
    cy.get('#simple-item4').contains('Secondary content (pf-m-align-right pf-m-no-fill)');
  });

  it('Verify rows selectable', () => {
    cy.get("#row1.pf-m-selectable").should('be.visible');
    cy.get("#row2.pf-m-selectable").should('be.visible');

    cy.get("#row1.pf-m-selected").should('not.be.visible');
    cy.get("#row2.pf-m-selected").should('not.be.visible');

    cy.get("#row1").click();
    cy.get("#row1.pf-m-selected").should('be.visible');
    cy.get("#row2.pf-m-selected").should('not.be.visible');

    cy.get("#row2").click();
    cy.get("#row1.pf-m-selected").should('not.be.visible');
    cy.get("#row2.pf-m-selected").should('be.visible');
  });
});
