describe('Card Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#card-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
  });

  it('Verify default header', () => {
    cy.get('.pf-c-card__header').contains('Header');
  });

  it('Verify default body content', () => {
    cy.get('.pf-c-card__body').contains('Body');
  });

  it('Verify card is hoverable', () => {
    cy.get('article')
      .first()
      .should('have.class', 'pf-m-hoverable');
  });

  it('Verify card is compact', () => {
    cy.get('article')
      .eq(1)
      .should('have.class', 'pf-m-compact');
  });

  it('Verify card is selectable and selected', () => {
    cy.get('article')
      .last()
      .should('have.class', 'pf-m-selected')
      .should('have.class', 'pf-m-selectable');
  });

  //Accessibility Tests
  it('Checks that selectable card is keyboard accessible', () => {
    cy.get('#random-link')
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      .tab()
      .focused()
      .should('have.class', 'pf-m-selectable')
      .tab() // interactive elements inside card are tabble
      .focused()
      .should('have.id', 'inside-link')
  });
  it('Checks that shift tab sends focus correctly', () => {
    cy.get('#inside-link')
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    .tab({shift: true})
    .focused()
    .should('have.class', 'pf-m-selected')
  })
});
