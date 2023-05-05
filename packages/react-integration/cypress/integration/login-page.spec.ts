describe('Login Page Demo Test', () => {
  it('Navigate to login page section', () => {
    cy.visit('http://localhost:3000/login-page-demo-nav-link');
  });

  it('Verify initial state', () => {
    cy.get('input[name="pf-login-username-id"]').then((userNameInput) => expect(userNameInput.text()).to.equal(''));
    cy.get('input[name="pf-login-password-id"]').then((passwordInput) => expect(passwordInput.text()).to.equal(''));
    cy.get('#pf-login-remember-me-id').then((rememberMeBox) => expect(rememberMeBox.is(':checked')).to.be.false);
    cy.get('.pf-v5-c-form__helper-text .pf-m-error').should('not.exist');
    cy.get('.pf-v5-c-login__main-footer-links')
      .find('.pf-v5-c-login__main-footer-links-item')
      .then((links) => expect(links.length).to.equal(5));
  });

  it('Verify error is shown on invalid credentials', () => {
    cy.get('.pf-v5-c-login__main-body .pf-v5-c-button.pf-m-primary').then((loginButton: JQuery<HTMLButtonElement>) => {
      cy.wrap(loginButton).click();
      cy.get('.pf-v5-c-form__helper-text .pf-m-error').then((errorMessage) => {
        expect(errorMessage.length).to.equal(1);
      });
      cy.get('input[name="pf-login-username-id"][aria-invalid="true"]').then((userNameInput) => {
        expect(userNameInput.length).to.equal(1);
      });
      cy.get('input[name="pf-login-password-id"][aria-invalid="true"]').then((passwordInput) => {
        expect(passwordInput.length).to.equal(1);
      });
    });
  });

  it('Verify show/hide password toggles', () => {
    cy.get('[type="password"]').should('exist');
    cy.get('[aria-label="Test show password"]').should('exist');
    cy.get('[type="password"]').clear().type('testing');
    cy.get('[type="password"]').should('have.value', 'testing');
    cy.get('[aria-label="Test show password"]').click();

    cy.get('[type="password"]').should('not.exist');
    cy.get('[aria-label="Test show password"]').should('not.exist');
    cy.get('[aria-label="Test hide password"]').should('exist');
    cy.get('#pf-login-password-id').should('have.value', 'testing');
    cy.get('[aria-label="Test hide password"]').click();

    cy.get('[type="password"]').should('exist');
    cy.get('[aria-label="Test show password"]').should('exist');
    cy.get('[aria-label="Test hide password"]').should('not.exist');
  });
});
