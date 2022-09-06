describe('Select in modal Test', () => {
  it('Navigate to Select in Modal section', () => {
    cy.visit('http://localhost:3000/select-in-modal-demo-nav-link');
  });

  it('Verify Escape Press closes menus before modal', () => {
    cy.get('#modal-for-select-in-modal').then((modalButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(modalButton).click();

      cy.get('.pf-c-page').then(() => {
        cy.get('.pf-c-modal-box')
          .then(() => {
            cy.get('#select-in-modal-select').then(selectToggle => {
              cy.wrap(selectToggle).click();
              cy.get('.pf-c-select .pf-c-select__menu').should('exist');
              cy.get('body').type('{esc}');
              cy.get('.pf-c-modal-box').should('exist');
              cy.get('.pf-c-select .pf-c-select__menu').should('not.exist');
            });
            cy.get('#select-in-modal-time-picker-input').then(timePicker => {
              cy.wrap(timePicker).click();
              cy.get('.pf-c-menu.pf-m-scrollable').should('exist');
              cy.get('body').type('{esc}');
              cy.get('.pf-c-modal-box').should('exist');
              cy.get('.pf-c-menu.pf-m-scrollable').should('not.exist');
            });
          })
          .then(() => {
            cy.get('.pf-c-modal-box').should('exist');
            cy.get('body').type('{esc}');
            cy.get('.pf-c-modal-box').should('not.exist');
          });
      });
    });
  });
});
