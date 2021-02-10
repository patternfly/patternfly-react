describe('Slider Demo Test', () => {
  it('Navigate to Slider section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#slider-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/slider-demo-nav-link');
  });

  it('renders the discrete sliders', () => {
    cy.get('#discrete-slider').should('exist');
    cy.get('#discrete-slider').should('have.attr', 'style', '--pf-c-slider--value:62.5%;');
  });
});
