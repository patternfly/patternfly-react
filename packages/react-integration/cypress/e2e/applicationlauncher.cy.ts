describe('Application Launcher Favorites Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/application-launcher-favorites-demo-nav-link');
  });

  it('Verify application launcher button', () => {
    cy.get('button').should('have.class', 'pf-v5-c-button pf-m-plain');
  });

  it('Verify app launcher menu toggle', () => {
    cy.get('#toggle-fav').click();
    cy.get('.pf-v5-c-app-launcher__menu ul').should('exist');
    cy.get('#toggle-fav').click();
    cy.get('.pf-v5-c-app-launcher__menu').should('not.exist');
  });

  it('Verify application favorite works', () => {
    cy.get('#toggle-fav').click();
    cy.get('#item-1 > .pf-m-action').click();
    cy.get('.pf-v5-c-app-launcher__menu .pf-v5-c-app-launcher__group :nth-child(1).pf-v5-c-app-launcher__group-title')
      .first()
      .contains('Favorites');
  });

  it('Verify application un-favorite works', () => {
    cy.get('#item-1 > .pf-m-action').first().click();
    cy.get('.pf-v5-c-app-launcher__menu .pf-v5-c-app-launcher__group :nth-child(1).pf-v5-c-app-launcher__group-title')
      .first()
      .contains('Favorites')
      .should('not.exist');
  });

  it('Verify application search/filter works', () => {
    cy.get('.pf-v5-c-app-launcher__menu').find('li').should('have.length', 7);
    cy.get('.pf-v5-c-app-launcher__menu-search input').type('button');
    cy.get('.pf-v5-c-app-launcher__menu').find('li').should('have.length', 3);
    cy.get('#toggle-fav').click();
  });
});
