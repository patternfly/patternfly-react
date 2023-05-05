describe('Slider Demo Test', () => {
  it('Navigate to Slider section', () => {
    cy.visit('http://localhost:3000/slider-demo-nav-link');
  });

  it.skip('renders the discrete slider', () => {
    cy.get('#discrete-slider').should('exist');
    cy.get('#discrete-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value:62.5%; --pf-v5-c-slider__value--c-form-control--width-chars:1;'
    );
  });

  it('changes discrete slider value when clicked on', () => {
    cy.get('#discrete-slider > .pf-v5-c-slider__main > .pf-v5-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 300 })
      .trigger('mouseup', { force: true });
  });

  it.skip('renders the slider with input', () => {
    cy.get('#discrete-slider-input-label').should('exist');
    cy.get(
      '#discrete-slider-input-label > .pf-v5-c-slider__value > .pf-v5-c-input-group > .pf-v5-c-form-control'
    ).should('exist');
    cy.get(
      '#discrete-slider-input-label > .pf-v5-c-slider__value > .pf-v5-c-input-group > .pf-v5-c-input-group__text'
    ).should('exist');
    cy.get('#discrete-slider-input-label').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value:50%; --pf-v5-c-slider__value--c-form-control--width-chars:2;'
    );
  });

  it.skip('renders the continuous slider', () => {
    cy.get('#continuous-slider').should('exist');
    cy.get('#continuous-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value:50%; --pf-v5-c-slider__value--c-form-control--width-chars:2;'
    );
  });
});
