describe('Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-demo-nav-link');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#dropdown > button').click();
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.get('#toggle-id').click();
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Verify dropdown menu has alignment breakpoints', () => {
    cy.get('#dropdown > button').click();
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    const menu = cy.get('#dropdown .pf-c-dropdown__menu');
    menu.should('have.class', 'pf-m-align-left-on-sm');
    menu.should('have.class', 'pf-m-align-right-on-md');
    menu.should('have.class', 'pf-m-align-left-on-lg');
    menu.should('have.class', 'pf-m-align-right-on-xl');
    menu.should('have.class', 'pf-m-align-left-on-2xl');
    cy.get('#toggle-id').click();
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.clock();
    cy.get('#dropdown > button').trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.tick(1);
    cy.focused().contains('Link');
    // When toggle is expanded, enter closes panel
    cy.get('#toggle-id').trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#dropdown > button').trigger('keydown', { key: ' ' });
    cy.get('#dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Link');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('#toggle-id').type('{esc}');
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
      .trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { key: ' ' });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });
});

describe('Action Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-demo-nav-link');
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
    cy.clock();
    cy.get('#action-dropdown button')
      .last()
      .trigger('keydown', { key: 'Enter' });
    cy.get('#action-dropdown').should('have.class', 'pf-m-expanded');
    cy.tick(1);
    cy.focused().contains('Action');
    // When toggle is expanded, enter closes panel
    cy.get('#action-toggle-id').trigger('keydown', { key: 'Enter' });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#action-dropdown button')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#action-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('#action-toggle-id').type('{esc}');
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
      .trigger('keydown', { key: 'Enter' });
    cy.get('#action-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#action-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { key: ' ' });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });
});

describe('Cog Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('#cog-toggle-id').should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#cog-dropdown button')
      .eq(1)
      .click();
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.get('#cog-toggle-id').click();
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.clock();
    cy.get('#cog-dropdown button')
      .last()
      .trigger('keydown', { key: 'Enter' });
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.tick(1);
    cy.focused().contains('Action');
    // When toggle is expanded, enter closes panel
    cy.get('#cog-toggle-id').trigger('keydown', { key: 'Enter' });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#cog-dropdown button')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#cog-dropdown').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Action');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('#cog-toggle-id').type('{esc}');
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
      .trigger('keydown', { key: 'Enter' });
    cy.get('#cog-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#cog-dropdown button')
      .last()
      .click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { key: ' ' });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle-button');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
  });
});

describe('Dropdown with menu on document body demo test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('#dropdown-document-body > button').should('have.class', 'pf-c-dropdown__toggle');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('#dropdown-document-body').should('have.class', 'pf-m-expanded');
  });

  it('Verify dropdown menu is on document.body', () => {
    cy.get('body')
      .children('.pf-c-dropdown')
      .should('exist');
  });

  it('Verify dropdown menu closed', () => {
    cy.get('#toggle-id-document-body').click();
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.clock();
    cy.get('#dropdown-document-body > button').trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown-document-body').should('have.class', 'pf-m-expanded');
    cy.tick(1);
    cy.focused().contains('Link');
    // When toggle is expanded, enter closes panel
    cy.get('#toggle-id-document-body').trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('#dropdown-document-body > button').trigger('keydown', { key: ' ' });
    cy.get('#dropdown-document-body').should('have.class', 'pf-m-expanded');
    cy.focused().contains('Link');
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: ' ' });
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('#toggle-id-document-body').type('{esc}');
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Mouse click outside panel closes panel', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('main').click(0, 0, { force: true });
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
  });

  // Panel > Menu - Single-selection variant
  it('Mouse click closes panel', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('#dropdown-document-body')
      .find('button')
      .first()
      .click();
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
  });

  it('Enter closes the panel', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: 'Enter' });
    cy.get('#dropdown-document-body').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('#dropdown-document-body > button').click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', { key: ' ' });
    cy.focused().should('have.class', 'pf-c-dropdown__toggle');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('#dropdown > button').click();
    cy.get('.pf-c-dropdown__menu-item')
      .last()
      .trigger('keydown', { shiftKey: true, key: 'Tab' });
    cy.get('.pf-c-dropdown__toggle')
      .last()
      .should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });
});
