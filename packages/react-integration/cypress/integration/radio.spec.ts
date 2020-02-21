describe('Radio Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#radio-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/radio-demo-nav-link');
  });

  it('Verify controlled radio', () => {
    cy.get('#radio-2').should('be.checked');
    cy.get('#radio-1').check();
    cy.get('#radio-2').should('not.be.checked');
    cy.get('#radio-1').should('be.checked');
  });

  it('Verify uncontrolled radio', () => {
    cy.get('[for="radio-3"]').contains('Uncontrolled radio 1');
    cy.get('[for="radio-4"]').contains('Uncontrolled radio 2');
  });

  it('Verify disabled radio', () => {
    cy.get('#radio-5').should('be.checked');
    cy.get('#radio-5').should('be.disabled');
    cy.get('#radio-6').should('not.be.checked');
    cy.get('#radio-6').should('be.disabled');
  });

  // Inoperable radio example 1
  it('Verify inoperable radio can receive focus and has correct classes/attributes', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('div.pf-c-radio:nth-of-type(8)').click();
      cy.focused()
        .should('have.class', 'pf-m-inoperable')
        .and('have.attr', 'tabindex', '0');
      cy.get('div.pf-c-radio:nth-of-type(8)').focus();
      cy.focused().should('have.class', 'pf-m-inoperable');
    });
  });

  // Inoperable radio example 1
  it('Verify inoperable radio supresses events', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('div.pf-c-radio:nth-of-type(8)').click();
      cy.get('div.pf-c-radio:nth-of-type(8)')
        .find('.pf-c-radio__input')
        .click();
      cy.get('div.pf-c-radio:nth-of-type(8)')
        .find('.pf-c-radio__input')
        .focus();
      cy.get('div.pf-c-radio:nth-of-type(8)')
        .find('.pf-c-radio__input')
        .type('{enter}');
      cy.get('div.pf-c-radio:nth-of-type(8)')
        .find('.pf-c-radio__label')
        .click();
      cy.url().should('eq', 'http://localhost:3000/radio-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  // Inoperable radio example 2
  it('Verify inoperable radio can show tooltip on focus', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('div.pf-c-radio:nth-of-type(9)')
        .focus()
        .should('have.attr', 'aria-describedby', 'tippy-1');
    });
    cy.get('.tippy-popper').should('be.visible');
  });

  // Inoperable radio example 3
  it('Verify inoperable label wrapped radio can receive focus and has correct classes/attributes', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('label.pf-c-radio:nth-of-type(1)').click();
      cy.focused().should('have.class', 'pf-m-inoperable');
      cy.get('label.pf-c-radio:nth-of-type(1)').focus();
      cy.focused().should('have.class', 'pf-m-inoperable');
    });
  });

  // Inoperable radio example 3
  it('Verify inoperable label wrapped radio supresses events', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('label.pf-c-radio:nth-of-type(1)').click();
      cy.get('label.pf-c-radio:nth-of-type(1)')
        .find('.pf-c-radio__input')
        .click();
      cy.get('label.pf-c-radio:nth-of-type(1)')
        .find('.pf-c-radio__input')
        .focus();
      cy.get('label.pf-c-radio:nth-of-type(1)')
        .find('.pf-c-radio__input')
        .type('{enter}');
      cy.get('label.pf-c-radio:nth-of-type(1)')
        .find('.pf-c-radio__label')
        .click();
      cy.url().should('eq', 'http://localhost:3000/radio-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  // Inoperable radio example 4
  it('Verify inoperable label wrapped shows tooltip on focus', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('label.pf-c-radio:nth-of-type(2)')
        .focus()
        .should('have.attr', 'aria-describedby', 'tippy-2');
    });
    cy.get('.tippy-popper').should('be.visible');
  });

  // Inoperable radio example 5
  it('Verify inoperable label wrapped radio with nested tooltip can receive focus and has correct classes/attributes', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('label.pf-c-radio:nth-of-type(3)').click();
      cy.focused()
        .should('have.class', 'pf-m-inoperable')
        .and('have.id', 'inoperable-radio-5');
      cy.get('#inoperable-radio-5')
        .focus()
        .should('have.attr', 'aria-describedby', 'tippy-3')
        .and('have.class', 'pf-m-inoperable');
    });
    cy.get('.tippy-popper').should('be.visible');
  });

  // Inoperable radio example 6
  it('Verify inoperable radio with nested tooltip can receive focus and has correct classes/attributes', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('#inoperable-radio-6')
        .focus()
        .should('have.class', 'pf-m-inoperable')
        .and('have.attr', 'aria-describedby', 'tippy-4');
    });
    cy.get('.tippy-popper').should('be.visible');
  });

  // Inoperable radio example 7
  it('Verify inoperable radio with nested tooltip properly sets explicit tabindex values', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('#inoperable-radio-7').should('have.attr', 'tabindex', '6');
      cy.get('label.pf-c-radio:nth-of-type(4)').click();
      cy.focused().should('have.attr', 'tabindex', '6');
    });
  });

  // Inoperable radio example 8
  it('Verify inoperable radio wrapped in Tooltip properly sets explicit tabindex values', () => {
    cy.get('#ts-demo-app-page-id').within(() => {
      cy.get('div.pf-c-radio:nth-of-type(11)')
        .focus()
        .should('have.attr', 'tabindex', '3');
    });
  });

  // Inoperable radio example 8
  it('Verify inoperable radio wrapped in Tooltip avoids unnecessary tabstops', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.get('body').tab();
    cy.focused().should('have.attr', 'tabindex', '3');

    /* eslint-disable @typescript-eslint/ban-ts-ignore */
    cy.get('body')
      // @ts-ignore
      .tab()
      .tab();
    /* eslint-enable @typescript-eslint/ban-ts-ignore */
    cy.focused().should('have.attr', 'tabindex', '6');
  });
});
