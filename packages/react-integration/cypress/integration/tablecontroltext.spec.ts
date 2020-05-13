describe('Table Width Modifiers Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-control-text-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-control-text-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Table with wrap modifiers');
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

  it('Verify wrap modifiers', () => {
    cy.get('th')
      .first()
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-wrap');
      });

    cy.get('th')
      .eq(1)
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-nowrap');
      });

    cy.get('th')
      .eq(2)
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-truncate');
      });

    cy.get('th')
      .eq(3)
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-break-word');
      });

    cy.get('th')
      .eq(4)
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-fit-content');
      });
    cy.get('td')
      .eq(1)
      .then(wrapModifer => {
        expect(wrapModifer).to.have.class('pf-m-truncate');
      });
  });
});
