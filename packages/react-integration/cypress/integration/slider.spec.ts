describe('Slider Demo Test', () => {
  it('Navigate to Slider section', () => {
    cy.visit('http://localhost:3000/slider-demo-nav-link');
  });

  xit('changes discrete slider value when dragged', () => {
    cy.get('#discrete-slider').should('exist');
    cy.get('#discrete-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*62\.5%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
    cy.get('#discrete-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 150, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#discrete-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*75%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
  });

  it('changes discrete slider value using keyboard', () => {
    cy.get('#discrete-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').focus();
    cy.get('#discrete-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keydown', { keyCode: 39 });
    cy.wait(50);
    cy.get('#discrete-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keyup', { keyCode: 39 });
    cy.get('#discrete-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*87\.5%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
  });

  it('changes continuous slider value when dragged', () => {
    cy.get('#continuous-slider').should('exist');
    cy.get('#continuous-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*50%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*2\s*;/
      );
    cy.get('#continuous-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 430, 10, { force: true })
      .trigger('mouseup', { force: true });

    cy.get('#continuous-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*100%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*3\s*;/
      );
  });

  it('changes continuous slider value using keyboard', () => {
    cy.get('#continuous-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').focus();
    cy.get('#continuous-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keydown', { keyCode: 37 });
    cy.wait(100);
    cy.get('#continuous-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keyup', { keyCode: 37 });

    cy.get('#continuous-slider')
      .invoke('attr', 'style')
      .should(
        'not.match',
        /--pf-v6-c-slider--value:\s*100%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*3\s*;/
      );
  });

  it('disabled slider value does not change when dragged', () => {
    cy.get('#disabled-slider').should('exist');
    cy.get('#disabled-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*20%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );

    cy.get('#disabled-slider').should('have.class', 'pf-m-disabled');
    cy.get('#disabled-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', 430, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#disabled-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*20%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
  });

  it('changes custom steps slider value when dragged', () => {
    cy.get('#custom-steps-slider').should('exist');

    cy.get('#custom-steps-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*20%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
    cy.get('#custom-steps-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', -200, 10, { force: true })
      .trigger('mouseup', { force: true });
    cy.get('#custom-steps-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*0%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
  });

  it('changes custom steps slider value using keyboard', () => {
    cy.get('#custom-steps-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*0%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );

    cy.get('#custom-steps-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').focus();
    cy.get('#custom-steps-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keydown', { keyCode: 39 });
    cy.wait(100);
    cy.get('#custom-steps-slider > .pf-v6-c-slider__main > .pf-v6-c-slider__thumb').trigger('keyup', { keyCode: 39 });

    cy.get('#custom-steps-slider')
      .invoke('attr', 'style')
      .should(
        'match',
        /--pf-v6-c-slider--value:\s*20%\s*;?\s*--pf-v6-c-slider__value--c-form-control--width-chars:\s*1\s*;/
      );
  });
});
