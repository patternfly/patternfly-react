describe('Application Launcher Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#application-launcher-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/application-launcher-demo-nav-link');
  });

  it('Verify application launcher button', () => {
    cy.get('button').should('have.class', 'pf-c-button pf-m-plain');
  });

  it('Verify app launcher menu toggle', () => {
    cy.get('#toggle').click();
    cy.get('ul').should('have.class', 'pf-c-app-launcher__menu');
    cy.get('#toggle').click();
    cy.get('.pf-c-app-launcher__menu').should('not.exist');
  });

  it('Verify application click works', () => {
    cy.get('#toggle').click();
    cy.get('.pf-c-app-launcher__menu-item')
      .first()
      .should('have.attr', 'href', 'https://www.google.com');
  });
});

describe('Application Launcher Favorites Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#application-launcher-favorites-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/application-launcher-favorites-demo-nav-link');
  });

  it('Verify application launcher button', () => {
    cy.get('button').should('have.class', 'pf-c-button pf-m-plain');
  });

  it('Verify app launcher menu toggle', () => {
    cy.get('#toggle-fav').click();
    cy.get('.pf-c-app-launcher__menu ul').should('exist');
    cy.get('#toggle-fav').click();
    cy.get('.pf-c-app-launcher__menu').should('not.exist');
  });

  it('Verify application favorite works', () => {
    cy.get('#toggle-fav').click();
    cy.get('#item-1 > .pf-m-action').click();
    cy.get('.pf-c-app-launcher__menu .pf-c-app-launcher__group :nth-child(1).pf-c-app-launcher__group-title')
      .first()
      .contains('Favorites');
  });

  it('Verify application un-favorite works', () => {
    cy.get('#item-1 > .pf-m-action')
      .first()
      .click();
    cy.get('.pf-c-app-launcher__menu .pf-c-app-launcher__group :nth-child(1).pf-c-app-launcher__group-title')
      .first()
      .contains('Favorites')
      .should('not.exist');
  });

  it('Verify application search/filter works', () => {
    cy.get('.pf-c-app-launcher__menu')
      .find('li')
      .should('have.length', 7);
    cy.get('.pf-c-app-launcher__menu-search input').type('button');
    cy.get('.pf-c-app-launcher__menu')
      .find('li')
      .should('have.length', 3);
    cy.get('#toggle-fav').click();
  });
});
