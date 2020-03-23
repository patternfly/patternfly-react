describe('Button Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#button-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link');
  });

  it('Verify primary button', () => {
    cy.get('a').should('have.class', 'pf-m-primary');
  });

  it('Verify secondary button', () => {
    cy.get('a').should('have.class', 'pf-m-secondary');
  });

  it('Verify tertiary button', () => {
    cy.get('a').should('have.class', 'pf-m-tertiary');
  });

  it('Tertiary button should be disabled', () => {
    cy.get('.pf-m-tertiary').should('have.attr', 'aria-disabled', 'true');
  });

  it('Link button should be set to tabindex=-1', () => {
    cy.get('.pf-m-link').should('have.attr', 'tabindex', '-1');
  });

  // Accessibility tests

  it('Checks that tabbing sends focus to the correct elements', () => {
    cy.get('#primary-button')
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      .tab()
      .tab()
      .focused()
      .should('have.attr', 'id', 'control-button');
  });

  it('Checks that shift tab sends focus correctly', () => {
    cy.get('#secondary-button')
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      .tab({ shift: true })
      .focused()
      .should('have.attr', 'id', 'primary-button');
  });

  it('Enter should select button', () => {
    cy.get('#primary-button').trigger('keydown', { keyCode: 13 });
    cy.window().should('not.eq', 'http://localhost:3000/button-demo-nav-link');
  });

  // do this last since it leaves the page
  it('Verify primary button clicks', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#button-demo-nav-item-link').click();
    cy.get('a.pf-m-primary')
      .last()
      .click();
    cy.window().should('not.eq', 'http://localhost:3000/button-demo-nav-link');
  });
});
