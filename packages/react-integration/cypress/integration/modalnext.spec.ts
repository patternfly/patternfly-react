describe('Modal Test', () => {
  it('Navigate to Modal next section', () => {
    cy.visit('http://localhost:3000/modal-next-demo-nav-link');
  });

  it('Verify Half Width Modal', () => {
    cy.get('#showHalfWidthModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();

      cy.get('.pf-v5-c-page').then((page: JQuery<HTMLElement>) => {
        cy.get('.pf-v5-c-modal-box')
          .then(() => {
            cy.get('.pf-v5-c-modal-box').should('have.css', 'width', `${page.width() / 2}px`);
            cy.get('.pf-v5-c-modal-box .pf-v5-c-button[aria-label="Close"]').then((closeButton) => {
              cy.wrap(closeButton).click();
              cy.get('.pf-v5-c-modal-box').should('not.exist');
            });
          })
          .then(() => {
            cy.wrap(modalButton).click();
            cy.get('.pf-v5-c-modal-box').should('exist');
            cy.get('body').type('{esc}');
            cy.get('.pf-v5-c-modal-box').should('not.exist');
          });
      });
    });
  });

  it('Verify Custom Escape Press Modal', () => {
    cy.get('#showCustomEscapeModalButton.customEscapePressed').should('not.exist');
    cy.get('#showCustomEscapeModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-v5-c-modal-box').should('exist');
      cy.get('.pf-v5-c-modal-box')
        .then(() => {
          cy.get('.pf-v5-c-modal-box .pf-v5-c-button[aria-label="Close"]').then((closeButton) => {
            cy.wrap(closeButton).click();
            cy.get('.pf-v5-c-modal-box').should('not.exist');
            cy.get('#showCustomEscapeModalButton.customEscapePressed').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-v5-c-modal-box').should('exist');
          cy.get('body').type('{esc}');
          cy.get('.pf-v5-c-modal-box').should('not.exist');
          cy.get('#showCustomEscapeModalButton.customEscapePressed').should('exist');
        });
    });
  });

  it('Verify focustrap for basic modal', () => {
    cy.get('#tabstop-test').focus();

    // @ts-ignore
    cy.tab().click(); // click first btn to open first modal
    cy.focused().should('have.attr', 'aria-label', 'Close');

    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'data-id', 'modal-01-confirm-btn');

    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'data-id', 'modal-01-cancel-btn');

    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'aria-label', 'Close');
    cy.focused().click();
  });

  it('Verify escape key closes modal', () => {
    cy.get('#tabstop-test').focus();

    // @ts-ignore
    cy.tab().tab().click(); // open second modal

    cy.get('.pf-v5-c-modal-box').should('exist');
    // press escape key
    cy.get('body').type('{esc}');
    cy.get('.pf-v5-c-modal-box').should('not.exist');
  });

  it('Verify first focusable element receives focus by default', () => {
    cy.get('#showDefaultModalButton').click();
    cy.get('.pf-v5-c-modal-box__close > .pf-v5-c-button.pf-m-plain').should('have.focus');
    cy.get('.pf-v5-c-modal-box__close > .pf-v5-c-button.pf-m-plain').click();
  });

  it('Verify custom element receives focus', () => {
    cy.get('#showCustomFocusModalButton').click();
    cy.get('#modal-custom-focus-confirm-button').should('have.focus');
    cy.get('#modal-custom-focus-cancel-button').click();
  });

  it("Verify the same id doesn't appear multiple times", () => {
    cy.get('#showDescriptionModalButton').click();

    cy.get('body').find('div#test-modal-id').should('have.length', 1);

    cy.get('.pf-v5-c-modal-box__close > .pf-v5-c-button.pf-m-plain').click();
  });
});
