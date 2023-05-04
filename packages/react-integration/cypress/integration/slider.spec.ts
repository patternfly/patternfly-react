describe('Slider Demo Test', () => {
  it('Navigate to Slider section', () => {
    cy.visit('http://localhost:3000/slider-demo-nav-link');
  });

  it('renders the discrete slider', () => {
    cy.get('#discrete-slider').should('exist');
    cy.get('#discrete-slider').should(
      'have.attr',
      'style',
      '--pf-c-slider--value: 62.5%; --pf-c-slider__value--c-form-control--width-chars: 1;'
    );
  });

  it('changes discrete slider value when clicked on', () => {
    cy.get('#discrete-slider > .pf-c-slider__main > .pf-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 300 })
      .trigger('mouseup', { force: true });
  });

  it('renders the slider with input', () => {
    cy.get('#discrete-slider-input-label').should('exist');
    cy.get('#discrete-slider-input-label > .pf-c-slider__value > .pf-c-input-group > .pf-c-form-control').should(
      'exist'
    );
    cy.get('#discrete-slider-input-label > .pf-c-slider__value > .pf-c-input-group > .pf-c-input-group__text').should(
      'exist'
    );
    cy.get('#discrete-slider-input-label').should(
      'have.attr',
      'style',
      '--pf-c-slider--value: 50%; --pf-c-slider__value--c-form-control--width-chars: 2;'
    );
  });

  it('renders the continuous slider', () => {
    cy.get('#continuous-slider').should('exist');
    cy.get('#continuous-slider').should(
      'have.attr',
      'style',
      '--pf-c-slider--value: 50%; --pf-c-slider__value--c-form-control--width-chars: 2;'
    );
  });
});
