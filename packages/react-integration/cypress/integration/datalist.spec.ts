describe('Data List Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/data-list-demo-nav-link');
  });

  it('Verify rows selectable', () => {
    cy.get('#row1.pf-m-clickable').should('exist');
    cy.get('#row2.pf-m-clickable').should('exist');

    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row1').click();
    cy.get('#row1.pf-m-selected').should('exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row2').click();
    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('exist');
  });
});

// Skip this test until a new drag and drop is implemented
describe.skip('Data List Draggable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/data-list-draggable-demo-nav-link');
  });

  it('Verify drag', () => {
    cy.get('#data1').contains('Item 1');
    cy.get('#drag1').type(' ');
    cy.get('#drag1').type('{downarrow}');
    cy.get('#data1').should('have.class', 'pf-m-ghost-row');
    cy.get('#drag1').type('{downarrow}');
    cy.get('#drag1').type('{enter}');
    cy.get('#data1').should('not.have.class', 'pf-m-ghost-row');
  });
});
