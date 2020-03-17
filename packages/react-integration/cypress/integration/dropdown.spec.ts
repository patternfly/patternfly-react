describe('Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dropdown-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('#dropdown > button').should('have.class', 'pf-c-dropdown__toggle');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#dropdown > button').click();
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.get('#toggle-id').click();
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#dropdown > button').trigger('keydown', { keyCode: 13 });
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Link');
    // When toggle is expanded, enter closes panel
    cy.get('#toggle-id').trigger('keydown', { keyCode: 13 });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#dropdown > button').trigger('keydown', { keyCode: 32 });
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Link');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 32 });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('#toggle-id').trigger('keydown', { keyCode: 27 });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Mouse click outside panel closes panel', () => {
    cy.get('#dropdown > button').click();
    cy.get('main').click(0, 0, { force: true });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel > Menu - Single-selection variant
  it('Mouse click closes panel', () => {
    cy.get('#dropdown > button').click();
    cy.get('#dropdown')
      .find('button')
      .first()
      .click();
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Enter closes the panel', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 13 });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { keyCode: 32 });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, keyCode: 9, which: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Arrow down places focus on next enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Action');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Link');
  });

  it('Arrow up places focus on previous enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Separated Link');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Separated Action');
  });

  // Needs to be last because of redirect
  it('Verify menu selection/link works', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .should('have.attr', 'href', 'https://www.google.com');
  });
});

describe('Action Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dropdown-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('#action-toggle-id').should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('#action-dropdown').should('have.class', 'pf-m-expanded');
    cy.get('#action-toggle-id').click();
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#action-dropdown button')
      .last()
      .trigger('keydown', { keyCode: 13 });
    cy.get('#action-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, enter closes panel
    cy.get('#action-toggle-id').trigger('keydown', { keyCode: 13 });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#action-dropdown button')
      .last()
      .trigger('keydown', { keyCode: 32 });
    cy.get('#action-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 32 });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('#action-toggle-id').trigger('keydown', { keyCode: 27 });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Mouse click outside panel closes panel', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('main').click(0, 0, { force: true });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel > Menu - Single-selection variant
  it('Mouse click closes panel', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('#action-dropdown')
      .find('button')
      .last()
      .click();
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Enter closes the panel', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 13 });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { keyCode: 32 });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, keyCode: 9, which: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Arrow down places focus on next enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Other action');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Action');
  });

  it('Arrow up places focus on previous enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Action');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Other action');
  });
});

describe('Cog Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dropdown-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('#cog-toggle-id').should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.get('#cog-toggle-id').click();
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#cog-dropdown button')
      .last()
      .trigger('keydown', { keyCode: 13 });
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, enter closes panel
    cy.get('#cog-toggle-id').trigger('keydown', { keyCode: 13 });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#cog-dropdown button')
      .last()
      .trigger('keydown', { keyCode: 32 });
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 32 });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('#cog-toggle-id').trigger('keydown', { keyCode: 27 });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Mouse click outside panel closes panel', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('main').click(0, 0, { force: true });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel > Menu - Single-selection variant
  it('Mouse click closes panel', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('#cog-dropdown')
      .find('button')
      .last()
      .click();
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Enter closes the panel', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 13 });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { keyCode: 32 });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, keyCode: 9, which: 9 });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Arrow down places focus on next enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Other action');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 40 });
    cy.focused().contains('Action');
  });

  it('Arrow up places focus on previous enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Action');
    // except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item')
      .first()
      .trigger('keydown', { keyCode: 38 });
    cy.focused().contains('Other action');
  });
});
