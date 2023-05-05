describe('Button Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/button-demo-nav-link');
  });

  it('Verify isAriaDisabled button has tooltip when focused', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="normal-btn-11"]')
        .focus()
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-1');
    });
    cy.get('.pf-v5-c-tooltip').should('be.visible');
  });

  it('Verify isAriaDisabled button has tooltip when hovered', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="normal-btn-11"]')
        .trigger('mouseover')
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-1');
    });
    cy.get('.pf-v5-c-tooltip').should('be.visible');
  });

  it('Verify isAriaDisabled button prevents default actions', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="normal-btn-11"]').focus().click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  it('Verify isAriaDisabled button click events are permitted if overridden in inoperableEvents', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="aria-disabled-btn-1"]').should(
        'have.text',
        'Aria-disabled link button with custom list of prevented events 0'
      );

      cy.get('.pf-v5-c-button[id="aria-disabled-btn-1"]')
        .focus() // should not decrement to -1 since inoperableEvents={['onFocus']} is set
        .type('{enter}') // should increment to 1 since this event is not prevented
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 1');

      cy.get('.pf-v5-c-button[id="aria-disabled-btn-1"]')
        .focus()
        .blur() // should decrement back to to 0 since this event is not prevented
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 0');

      cy.get('.pf-v5-c-button[id="aria-disabled-btn-1"]')
        .focus()
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 0')
        .click() // click event should increment back to 1
        .should('have.text', 'Aria-disabled link button with custom list of prevented events 1');
    });
  });

  it('Verify isAriaDisabled link as button has tooltip when focused', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="link-as-btn-5"]')
        .focus()
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-2');
    });
  });

  it('Verify isAriaDisabled link as button has tooltip when hovered', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="link-as-btn-5"]')
        .trigger('mouseover')
        .should('have.attr', 'aria-describedby', 'button-with-tooltip-2');
    });
  });

  it('Verify isAriaDisabled link as button prevents default actions', () => {
    cy.get('.btn-demo-area').within(() => {
      cy.get('.pf-v5-c-button[id="link-as-btn-5"]').focus().click();
      cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link'); // shouldn't have navigated anywhere
    });
  });

  it('Verify that tabbing with keyboard sends focus to the correct elements', () => {
    cy.get('#tabstop-test').focus();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab().tab().tab().tab();
    cy.focused().should('have.attr', 'id', 'tabstop-test-04');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab({ shift: true }).tab({ shift: true });
    cy.focused().should('have.attr', 'id', 'tabstop-test-02');
  });
});
