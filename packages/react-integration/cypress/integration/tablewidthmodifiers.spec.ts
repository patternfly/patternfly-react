describe('Table Width Modifiers Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-width-modifiers-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-width-modifiers-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Table with Width Modifiers');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 2);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 5);
  });

  it('Verify width modifiers', () => {
    cy.get('th')
      .first()
      .then(widthModifer => {
        expect(widthModifer).to.have.class('pf-m-width-10');
      });

    cy.get('th')
      .eq(2)
      .then(widthModifer => {
        expect(widthModifer).to.have.class('pf-m-width-30');
      });

    cy.get('th')
      .eq(4)
      .then(widthModifer => {
        expect(widthModifer).to.have.class('pf-m-width-100');
      });
  });
});
