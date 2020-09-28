describe('Button Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#button-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link');
  });

  it('Verify button element variant classes', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-1"]').should('have.class', 'pf-m-primary');
      cy.get('.pf-c-button[id="normal-btn-2"]').should('have.class', 'pf-m-secondary');
      cy.get('.pf-c-button[id="normal-btn-3"]').should('have.class', 'pf-m-tertiary');
      cy.get('.pf-c-button[id="normal-btn-4"]').should('have.class', 'pf-m-danger');
      cy.get('.pf-c-button[id="normal-btn-5"]').should('have.class', 'pf-m-link');
      cy.get('.pf-c-button[id="normal-btn-6"]').should('have.class', 'pf-m-plain');
      cy.get('.pf-c-button[id="normal-btn-7"]').should('have.class', 'pf-m-control');
      cy.get('.pf-c-button[id="normal-btn-12"]').should('have.class', 'pf-m-small');
      cy.get('.pf-c-button[id="normal-btn-13"]').should('have.class', 'pf-m-display-lg');
      cy.get('.pf-c-button[id="normal-btn-14"]').should('have.class', 'pf-m-warning');
    });
  });

  it('Verify disabled button classes and attributes', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-8"]')
        .should('have.class', 'pf-m-disabled')
        .and('have.attr', 'disabled');
      cy.get('.pf-c-button[id="normal-btn-8"]').should('not.have.attr', 'tabindex');
      cy.get('.pf-c-button[id="normal-btn-8"]').should('have.attr', 'aria-disabled', 'true');
      cy.get('.pf-c-button[id="normal-btn-9"]')
        .should('have.class', 'pf-m-aria-disabled')
        .and('not.have.attr', 'disabled');
    });
  });

  it('Verify isAriaDisabled button classes and attributes', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-9"]').should('have.attr', 'aria-disabled', 'true');
      cy.get('.pf-c-button[id="normal-btn-9"]').should('not.have.attr', 'disabled');
      cy.get('.pf-c-button[id="normal-btn-9"]').should('not.have.attr', 'tabindex');
    });
  });

  it('Verify Progress button classes and attributes', () => {
    cy.get('.pf-c-button[id="normal-btn-15"]').should('have.class', 'pf-m-progress');
    cy.get('.pf-c-button[id="normal-btn-15"]').should('have.class', 'pf-m-in-progress');
    cy.get('.pf-c-button[id="normal-btn-16"]').should('have.class', 'pf-m-progress');
    cy.get('.pf-c-button[id="normal-btn-16"]').should('not.have.class', 'pf-m-in-progress');
  });

  it('Verify button can set explicit tabindex attribute', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-10"]').should('have.attr', 'tabindex', '2');
    });
  });

  it('Verify isAriaDisabled button has tooltip when focused', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-11"]')
        .focus()
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-1');
    });
    cy.get('.pf-c-tooltip').should('be.visible');
  });

  it('Verify isAriaDisabled button has tooltip when hovered', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-11"]')
        .trigger('mouseover')
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-1');
    });
    cy.get('.pf-c-tooltip').should('be.visible');
  });

  it('Verify isAriaDisabled button prevents default actions', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="normal-btn-11"]')
        .focus()
        .click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  it('Verify isAriaDisabled button click events are permitted if overridden in inoperableEvents', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="aria-disabled-btn-1"]').should(
        'have.text',
        'Aria-disabled link button with custom list of prevented events 0'
      );

      cy.get('.pf-c-button[id="aria-disabled-btn-1"]')
        .focus() // should not decrement to -1 since inoperableEvents={['onFocus']} is set
        .type('{enter}') // should increment to 1 since this event is not prevented
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 1');

      cy.get('.pf-c-button[id="aria-disabled-btn-1"]')
        .focus()
        .blur() // should decrement back to to 0 since this event is not prevented
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 0');

      cy.get('.pf-c-button[id="aria-disabled-btn-1"]')
        .focus()
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 0')
        .click() // click event should increment back to 1
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 1');
    });
  });

  it('Verify link button classes and attributes', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-btn-1"]').should('have.class', 'pf-m-link');
      cy.get('.pf-c-button[id="link-btn-2"]').should('have.class', 'pf-m-inline');

      cy.get('.pf-c-button[id="link-btn-3"]').should('have.class', 'pf-m-disabled');
      cy.get('.pf-c-button[id="link-btn-3"]').should('have.class', 'pf-m-link');
      cy.get('.pf-c-button[id="link-btn-3"]').should('have.attr', 'disabled');
      cy.get('.pf-c-button[id="link-btn-3"]').should('have.attr', 'aria-disabled', 'true');

      cy.get('.pf-c-button[id="link-btn-4"]').should('have.attr', 'aria-disabled', 'true');
      cy.get('.pf-c-button[id="link-btn-4"]').should('not.have.attr', 'disabled');
      cy.get('.pf-c-button[id="link-btn-4"]')
        .should('have.class', 'pf-m-aria-disabled')
        .and('have.class', 'pf-m-link');

      cy.get('.pf-c-button[id="link-btn-5"]').should('have.class', 'pf-m-link');
      cy.get('.pf-c-button[id="link-btn-5"]').should('have.attr', 'tabindex', '-1');
    });
  });

  it('Verify link as button classes and attributes', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-as-btn-1"]')
        .should('have.class', 'pf-c-button')
        .and('have.attr', 'href', 'https://github.com/patternfly/patternfly-react');

      cy.get('.pf-c-button[id="link-as-btn-2"]').should('have.class', 'pf-m-disabled');
      cy.get('.pf-c-button[id="link-as-btn-2"]')
        .should('have.attr', 'aria-disabled', 'true')
        .and('not.have.attr', 'disabled');
      cy.get('.pf-c-button[id="link-as-btn-2"]').should('have.attr', 'tabindex', '-1');
      cy.get('.pf-c-button[id="link-as-btn-2"]').click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere

      cy.get('.pf-c-button[id="link-as-btn-3"]').should('not.have.class', 'pf-m-disabled');
      cy.get('.pf-c-button[id="link-as-btn-3"]')
        .should('have.attr', 'aria-disabled', 'true')
        .and('not.have.attr', 'disabled');
      cy.get('.pf-c-button[id="link-as-btn-3"]').should('not.have.attr', 'tabindex');
      cy.get('.pf-c-button[id="link-as-btn-3"]').click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere

      cy.get('.pf-c-button[id="link-as-btn-4"]').should('have.attr', 'tabindex', '4');

      cy.get('.pf-c-button[id="link-as-btn-5"]').should('have.attr', 'aria-disabled', 'true');
    });
  });

  it('Verify isAriaDisabled link as button has tooltip when focused', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-as-btn-5"]')
        .focus()
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-2');
    });
  });

  it('Verify isAriaDisabled link as button has tooltip when hovered', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-as-btn-5"]')
        .trigger('mouseover')
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-2');
    });
  });

  it('Verify isAriaDisabled link as button prevents default actions', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-as-btn-5"]')
        .focus()
        .click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  it('Verify primary button clicks', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-c-button[id="link-as-btn-4"]').should(
        'have.attr',
        'href',
        'https://github.com/patternfly/patternfly-react'
      );
    });
  });
});
