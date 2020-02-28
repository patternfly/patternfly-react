describe('Focusable Simple Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#focusable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/focusable-demo-nav-link');
  });

  it('Checks that incrementing tabindex values send focus to the correct elements', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.get('body').tab();
    cy.focused()
      .should('have.attr', 'tabindex', '1')
      .and('have.attr', 'data-positive-tabindex-example');

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.focused().tab();
    cy.focused()
      .should('have.attr', 'tabindex', '3')
      .and('have.attr', 'data-disabled-textinput-tooltip-example');
  });

  it('Check that you can tab through non-interactive elements', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore // goal is to focus a section that has tabindex="-1" and press tab from there, currently you have to supply tabindex="0"
    cy.get('.non-interactive-elements')
      .focus()
      .tab()
      .should('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-text-example');

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.focused()
      .tab()
      .should('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-non-interactive-html-example');

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.focused()
      .tab()
      .should('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-non-interactive-component-example');

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.focused()
      .tab()
      .should('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-icon-example');
  });

  it('Check that focusing disabled element wrappers displays the tooltip', () => {
    cy.get('[data-disabled-button-tooltip-example]')
      .focus()
      .should('have.attr', 'aria-describedby', 'tippy-2');

    cy.get('[data-disabled-html-button-tooltip-example]')
      .focus()
      .should('have.attr', 'aria-describedby', 'tippy-3');

    cy.get('[data-disabled-radio-tooltip-example]')
      .focus()
      .should('have.attr', 'aria-describedby', 'tippy-4');

    cy.get('[data-disabled-textinput-tooltip-example]')
      .focus()
      .should('have.attr', 'aria-describedby', 'tippy-5');
  });

  it('Check that you can tab through interactive elements', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.get('.interactive-elements-enabled')
      .focus()
      .within(() => {
        // goal is to focus a section that has tabindex="-1" and press tab from there
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        cy.tab()
          .focused()
          .should('have.attr', 'tabindex', '0')
          .and('have.attr', 'data-enabled-button-tooltip-example');
      });

    cy.get('.interactive-elements-enabled')
      .focus()
      .within(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        cy.tab()
          .tab()
          .focused()
          .should('have.attr', 'tabindex', '0')
          .and('have.attr', 'data-enabled-radio-tooltip-example');
      });

    cy.get('.interactive-elements-enabled')
      .focus()
      .within(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        cy.tab()
          .tab()
          .tab()
          .focused()
          .should('have.attr', 'tabindex', '0')
          .and('have.attr', 'data-redundantly-undisabled-button-tooltip-example');
      });
  });
});
