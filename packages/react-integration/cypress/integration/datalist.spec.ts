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
    cy.get('#row1.pf-m-selectable').should('exist');
    cy.get('#row2.pf-m-selectable').should('exist');

    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row1').click();
    cy.get('#row1.pf-m-selected').should('exist');
    cy.get('#row2.pf-m-selected').should('not.exist');

    cy.get('#row2').click();
    cy.get('#row1.pf-m-selected').should('not.exist');
    cy.get('#row2.pf-m-selected').should('exist');
  });

  it('Verify row truncates', () => {
    cy.get('#truncate-content').should('have.class', 'pf-m-truncate');
  });
});

describe('Data List Compact Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#data-list-compact-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/data-list-compact-demo-nav-link');
  });

  it('Verify header', () => {
    cy.get('#simple-item1').contains('Primary content');
    cy.get('#simple-item2').contains('Secondary content');
  });

  it('Verify body content', () => {
    cy.get('#simple-item3').contains('Secondary content (pf-m-no-fill)');
    cy.get('#simple-item4').contains('Secondary content (pf-m-align-right pf-m-no-fill)');
  });
});

describe('Data List Draggable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#data-list-draggable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/data-list-draggable-demo-nav-link');
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
