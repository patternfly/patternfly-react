describe('Table Selectable Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-selectable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Selectable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v5-c-table').find('tr').should('have.length', 4);
  });

  it('Check number of columns', () => {
    cy.get('thead').find('th').should('have.length', 5);

    // There should be a canSelectAll input
    cy.get('thead').find('td').should('have.length', 1);
  });

  it('Test selectable checkbox', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get(`tbody tr:nth-child(${i}) .pf-v5-c-table__check > label > input`).check();
    }

    for (let i = 1; i <= 3; i++) {
      cy.get(`tbody tr:nth-child(${i}) .pf-v5-c-table__check > label > input`).should('be.checked');
    }
  });

  it('Test selectable radio', () => {
    // Switch to radio buttons table
    cy.get('input[name=selectVariant][value=radio]').click();

    for (let i = 1; i <= 3; i++) {
      cy.get(`tbody tr:nth-child(${i}) .pf-v5-c-table__check > label > input`).check();
    }
    // Only last radio input should be checked in the end of the iteration
    for (let i = 1; i <= 3; i++) {
      if (i < 3) {
        cy.get(`tbody tr:nth-child(${i}) .pf-v5-c-table__check > label > input`).should('not.be.checked');
      } else {
        cy.get(`tbody tr:nth-child(${i}) .pf-v5-c-table__check > label > input`).should('be.checked');
      }
    }
  });

  it('Check that first column canSelectAll input is missing', () => {
    cy.get('thead').find('td').should('have.length', 0);
  });
});
