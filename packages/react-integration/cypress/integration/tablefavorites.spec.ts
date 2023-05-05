describe('Table Favorites Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-favorites-demo-nav-link');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v5-c-table > tbody').find('tr').should('have.length', 3);
  });

  it('Check number of columns', () => {
    cy.get('thead > tr').children().should('have.length', 7);
  });

  it('Test favorites button', () => {
    cy.get('#favorites-button-1').parent().should('not.have.class', 'pf-m-favorited');

    cy.get('#favorites-button-1').click();

    cy.get('#favorites-button-1').parent().should('have.class', 'pf-m-favorited');

    cy.get('#favorites-button-1').click();

    cy.get('#favorites-button-1').parent().should('not.have.class', 'pf-m-favorited');
  });

  it('Sort favorites', () => {
    // initially not sorted
    cy.get('#favorites-button-0').parent().should('have.class', 'pf-m-favorited');
    cy.get('#favorites-button-1').parent().should('not.have.class', 'pf-m-favorited');
    cy.get('#favorites-button-2').parent().should('have.class', 'pf-m-favorited');

    // click fav sort icon
    cy.get('thead > tr').children().eq(1).click();

    // sorted ascending (favorited items first)
    cy.get('#favorites-button-0').parent().should('have.class', 'pf-m-favorited');
    cy.get('#favorites-button-1').parent().should('have.class', 'pf-m-favorited');
    cy.get('#favorites-button-2').parent().should('not.have.class', 'pf-m-favorited');

    // sort again descending (favorited items last)
    cy.get('thead > tr').children().eq(1).click();

    cy.get('#favorites-button-0').parent().should('not.have.class', 'pf-m-favorited');
    cy.get('#favorites-button-1').parent().should('have.class', 'pf-m-favorited');
    cy.get('#favorites-button-2').parent().should('have.class', 'pf-m-favorited');
  });
});
