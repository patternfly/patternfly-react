describe('Select Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/select-favorites-demo-nav-link');
  });

  it('Verify Single Select with Favorites', () => {
    cy.get('#favorites-select').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
    cy.get('#option-1 > .pf-m-action').should('have.attr', 'aria-label', 'custom not starred');
    cy.get('#option-1 > .pf-m-action').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('exist');
    cy.get('#option-1 > .pf-m-action').should('have.attr', 'aria-label', 'custom starred');
    cy.get('#option-1 > .pf-m-action').first().click();
    cy.get('#Favorites').should('not.exist');
    // toggle closed
    cy.get('#favorites-select').click();
  });

  it('Verify Single Grouped Select with Favorites', () => {
    cy.get('#favorites-select-grouped').click();
    cy.get('#My-Favorites').should('not.exist');
    cy.get('#option-grouped-1 > .pf-m-action').should('have.attr', 'aria-label', 'not starred');
    cy.get('#option-grouped-1 > .pf-m-action').click();
    cy.get('#My-Favorites').should('exist');
    cy.get('#option-grouped-1 > .pf-m-action').should('have.attr', 'aria-label', 'starred');
    cy.get('#option-grouped-1 > .pf-m-action').first().click();
    cy.get('#My-Favorites').should('not.exist');
    // toggle closed
    cy.get('#favorites-select-grouped').click();
  });

  it('Verify Typeahead Select with Favorites', () => {
    cy.get('#typeahead-select').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
    cy.get('#typeahead-select-select-typeahead').should('have.value', '');
    // Verify selections work
    cy.get('#down-option').click();
    cy.get('#typeahead-select-select-typeahead').should('have.value', 'Down');
    cy.get('#typeahead-select').click();
    // click on Running so it is added to favorites
    cy.get('#running-option > .pf-m-action').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('exist');
    // filter so that Running is removed and favorites section therefore removed
    cy.get('#typeahead-select-select-typeahead').type('h');
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
    // Clear filter so Favorites shows again
    cy.get('#typeahead-select-select-typeahead').clear();
    cy.get('.pf-v5-c-select__menu-group-title').should('exist');
    cy.get('#running-option > .pf-m-action').first().click();
    cy.get('#Favorites').should('not.exist');
    // toggle closed
    cy.get('#typeahead-select').click();
  });

  it('Verify Multi Typeahead  Select with Favorites', () => {
    cy.get('#typeahead-multi-select').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').should('have.value', '');
    // Verify selections work
    cy.get('#grapes-option').click();
    cy.get('.pf-v5-c-chip').contains('grapes').should('exist');
    cy.get('#pears-option').click();
    cy.get('.pf-v5-c-chip').contains('pears').should('exist');
    // click on apples so it is added to favorites
    cy.get('#apples-option > .pf-m-action').click();
    cy.get('.pf-v5-c-select__menu-group-title').should('exist');
    // filter so that apples is removed and favorites section therefore removed
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').type('h');
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
    // Clear filter so Favorites shows again
    cy.get('#typeahead-multi-select-select-multi-typeahead-typeahead').clear();
    cy.get('.pf-v5-c-select__menu-group-title').should('exist');
    cy.get('#apples-option > .pf-m-action').first().click();
    cy.get('.pf-v5-c-select__menu-group-title').should('not.exist');
  });
});
