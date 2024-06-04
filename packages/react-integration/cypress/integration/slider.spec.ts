describe('Slider Demo Test', () => {
  it('Navigate to Slider section', () => {
    cy.visit('http://localhost:3000/slider-demo-nav-link');
  });

  it('renders the discrete slider', () => {
    cy.get('#discrete-slider').should('exist');
    cy.get('#discrete-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 62.5%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
  });

  it('changes discrete slider value when dragged', () => {
    cy.get('#discrete-slider > .pf-v5-c-slider__main > .pf-v5-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 150, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#discrete-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 75%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
  });

  it('renders the slider with input', () => {
    cy.get('#discrete-slider-input-label').should('exist');
    cy.get(
      '#discrete-slider-input-label > .pf-v5-c-slider__value > .pf-v5-c-input-group > .pf-v5-c-input-group__item > .pf-v5-c-form-control'
    ).should('exist');
    cy.get(
      '#discrete-slider-input-label > .pf-v5-c-slider__value > .pf-v5-c-input-group > .pf-v5-c-input-group__item > .pf-v5-c-input-group__text'
    ).should('exist');
    cy.get('#discrete-slider-input-label').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 50%; --pf-v5-c-slider__value--c-form-control--width-chars: 2;'
    );
  });

  it('renders the continuous slider', () => {
    cy.get('#continuous-slider').should('exist');
    cy.get('#continuous-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 50%; --pf-v5-c-slider__value--c-form-control--width-chars: 2;'
    );
  });

  it('changes continuous slider value when dragged', () => {
    cy.get('#continuous-slider > .pf-v5-c-slider__main > .pf-v5-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 430, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#continuous-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 100%; --pf-v5-c-slider__value--c-form-control--width-chars: 3;'
    );
  });

  it('renders the disabled slider', () => {
    cy.get('#disabled-slider').should('exist');
    cy.get('#disabled-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 20%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
    cy.get('#disabled-slider').should('have.class', 'pf-m-disabled');
  });

  it('disabled slider value does not change when dragged', () => {
    cy.get('#disabled-slider > .pf-v5-c-slider__main > .pf-v5-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 430, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#disabled-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 20%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
  });

  it('renders slider with custom steps', () => {
    cy.get('#custom-steps-slider').should('exist');
    cy.get('#custom-steps-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 20%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
  });

  it('changes custom steps slider value when dragged', () => {
    cy.get('#custom-steps-slider > .pf-v5-c-slider__main > .pf-v5-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', -200, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#custom-steps-slider').should(
      'have.attr',
      'style',
      '--pf-v5-c-slider--value: 0%; --pf-v5-c-slider__value--c-form-control--width-chars: 1;'
    );
  });
});
