describe('Login Page Demo Test', () => {
  it('Navigate to login page section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#login-page-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/login-page-demo-nav-link');
  });

  it('Verify initial state', () => {
    cy.get('input[name="pf-login-username-id"]').then(userNameInput => expect(userNameInput.text()).to.equal(''));
    cy.get('input[name="pf-login-password-id"]').then(passwordInput => expect(passwordInput.text()).to.equal(''));
    cy.get('#pf-login-remember-me-id').then(rememberMeBox => expect(rememberMeBox.is(':checked')).to.be.false);
    cy.get('.pf-c-form__helper-text.pf-m-error').should('not.exist');
    cy.get('.pf-c-login__main-footer-links')
      .find('.pf-c-login__main-footer-links-item')
      .then(links => expect(links.length).to.equal(5));
  });

  it('Verify error is shown on invalid credentials', () => {
    cy.get('.pf-c-login__main-body .pf-c-button.pf-m-primary').then((loginButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(loginButton).click();
      cy.get('.pf-c-form__helper-text.pf-m-error').then(errorMessage => {
        expect(errorMessage.length).to.equal(1);
      });
      cy.get('input[name="pf-login-username-id"][aria-invalid="true"]').then(userNameInput => {
        expect(userNameInput.length).to.equal(1);
      });
      cy.get('input[name="pf-login-password-id"][aria-invalid="true"]').then(passwordInput => {
        expect(passwordInput.length).to.equal(1);
      });
    });
  });
});
