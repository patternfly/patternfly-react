describe('Breadcrumb Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#breadcrumb-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/breadcrumb-demo-nav-link');
  });

  it('Verify breadcrumb items have link', () => {
    cy.get('li')
      .children('a')
      .should('not.be.undefined');
    cy.get('li')
      .children('a')
      .should('not.equal', null);
  });

  it('Verify default section home content', () => {
    cy.get('.pf-c-breadcrumb__link')
      .first()
      .contains('Section Home');
  });

  it('Verify default section label defaults', () => {
    cy.get('.pf-c-breadcrumb__link').contains('Section Title');
  });

  it('Verify Section Home takes user to home page', () => {
    cy.get('.pf-c-breadcrumb__link')
      .first()
      .contains('Section Home')
      .click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
