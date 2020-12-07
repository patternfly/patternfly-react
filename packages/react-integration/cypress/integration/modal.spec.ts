describe('Modal Test', () => {
  it('Navigate to Modal section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#modal-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/modal-demo-nav-link');
  });

  it('Verify Default Modal', () => {
    cy.get('#showDefaultModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Description Modal', () => {
    cy.get('#showDescriptionModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Small Modal', () => {
    cy.get('#showSmallModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box').should('have.class', 'pf-m-align-top');
      cy.get('.pf-c-modal-box.pf-m-sm')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Medium Modal', () => {
    cy.get('#showMediumModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box.pf-m-md')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Large Modal', () => {
    cy.get('#showLargeModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box.pf-m-lg')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Half Width Modal', () => {
    cy.get('#showHalfWidthModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();

      cy.get('.pf-c-page').then((page: JQuery<HTMLElement>) => {
        cy.get('.pf-c-modal-box')
          .then(() => {
            cy.get('.pf-c-modal-box').should('have.css', 'width', `${page.width() / 2}px`);
            cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
              cy.wrap(closeButton).click();
              cy.get('.pf-c-modal-box').should('not.exist');
            });
          })
          .then(() => {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box').should('exist');
            cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
            cy.get('.pf-c-modal-box').should('not.exist');
          });
      });
    });
  });

  it('Verify Custom Header/Footer Modal', () => {
    cy.get('#showCustomHeaderFooterModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('#customHeaderTitle').should('exist');
          cy.get('#customHeaderDescription').should('exist');
          cy.get('#customFooterTitle').should('exist');
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify No Header Modal', () => {
    cy.get('#showNoHeaderModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('.pf-c-title').should('not.exist');
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify Custom Escape Press Modal', () => {
    cy.get('#showCustomEscapeModalButton.customEscapePressed').should('not.exist');
    cy.get('#showCustomEscapeModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box').should('exist');
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
            cy.get('#showCustomEscapeModalButton.customEscapePressed').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
          cy.get('#showCustomEscapeModalButton.customEscapePressed').should('exist');
        });
    });
  });

  it('Verify Help Modal', () => {
    cy.get('#showHelpModalButton').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();
      cy.get('.pf-c-modal-box__header').should('have.class', 'pf-m-help');
      cy.get('.pf-c-modal-box')
        .then(() => {
          cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(closeButton => {
            cy.wrap(closeButton).click();
            cy.get('.pf-c-modal-box').should('not.exist');
          });
        })
        .then(() => {
          cy.wrap(modalButton).click();
          cy.get('.pf-c-modal-box').should('exist');
          cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
          cy.get('.pf-c-modal-box').should('not.exist');
        });
    });
  });

  it('Verify focustrap for basic modal', () => {
    cy.get('#tabstop-test').focus();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab().click(); // click first btn to open first modal
    cy.focused().should('have.attr', 'aria-label', 'Close');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'data-id', 'modal-01-cancel-btn');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'data-id', 'modal-01-confirm-btn');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab();
    cy.focused().should('have.attr', 'aria-label', 'Close');
    cy.focused().click();
  });

  it('Verify escape key closes modal', () => {
    cy.get('#tabstop-test').focus();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.tab()
      .tab()
      .click(); // open second modal

    cy.get('.pf-c-modal-box').should('exist');
    // press escape key
    cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
    cy.get('.pf-c-modal-box').should('not.exist');
  });
});
