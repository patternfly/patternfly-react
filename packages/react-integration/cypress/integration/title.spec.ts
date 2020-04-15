describe('Title Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#title-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/title-demo-nav-link');
  });

  it('Verify h1 receives correct default size', () => {
    cy.get('h1#example1').should('have.class', 'pf-m-2xl');
  });

  it('Verify h2 receives correct default size', () => {
    cy.get('h2#example2').should('have.class', 'pf-m-xl');
  });

  it('Verify h3 receives correct default size', () => {
    cy.get('h3#example3').should('have.class', 'pf-m-lg');
  });

  it('Verify h4 receives correct default size', () => {
    cy.get('h4#example4').should('have.class', 'pf-m-md');
  });

  it('Verify h5 receives correct default size', () => {
    cy.get('h5#example5').should('have.class', 'pf-m-md');
  });

  it('Verify h6 receives correct default size', () => {
    cy.get('h6#example6').should('have.class', 'pf-m-md');
  });

  it('Verify ability to override default h2 size of "xl" to "md"', () => {
    cy.get('h2#example7').should('have.class', 'pf-m-md');
  });

  it('Verify setting title size to "4xl" using TitleSizes', () => {
    cy.get('h3#example8').should('have.class', 'pf-m-4xl');
  });
});
