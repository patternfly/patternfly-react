describe('Dropdown Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#dropdown-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
  });

  it('Verify toggle dropdown', () => {
    cy.get('button').should('have.class', 'pf-c-dropdown__toggle');
  });

  // Accessibility Tests:
  // Mouse click opens panel
  it('Verify dropdown menu expanded', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');
    cy.get('.pf-c-dropdown__toggle').last().click();
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // When toggle is collapsed:
  it('Enter opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('button').last().trigger('keydown', {keyCode: 13});
    cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');   
    cy.focused().contains('Link'); 
  // When toggle is expanded, enter closes panel
    cy.get('.pf-c-dropdown__toggle').last().trigger('keydown', {keyCode: 13});
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Space opens panel, places focus on first element in panel that can receive focus', () => {
    cy.get('button').last().trigger('keydown', {keyCode: 32})
    cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');   
    cy.focused().contains('Link'); 
    // When toggle is expanded, space closes panel and focus stays on the toggle
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {keyCode: 32})
    cy.get('.pf-c-dropdown__toggle').last().should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  // Panel - Escape User action
  it('Esc closes planel, places focus on the toggle', () => {
    cy.get('button').last().click();
    cy.get('#toggle-id').trigger('keydown', {keyCode: 27});
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Mouse click outside panel closes panel', () => {
    cy.get('button').last().click();
    cy.get('main').click(0, 0, {force: true})
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  // Panel > Menu - Single-selection variant
  it('Mouse click closes panel', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown').find('button').first().click();
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('Enter closes the panel', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {keyCode: 13});
    cy.get('.pf-c-dropdown').should('not.have.class', 'pf-m-expanded');
  });

  it('When focus is in panel, space places focus on toggle', () => {
    cy.get('button').last().click();
    cy.get('.pf-c-dropdown__menu').trigger('keydown', {keyCode: 32});
    cy.focused().should('have.class', 'pf-c-dropdown__toggle');
  });

  // Panel > Menu > Menu Item - Managing focus
  it('Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {keyCode: 9})
    cy.get('.pf-c-dropdown__toggle').last().should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Shift + Tab closes panel, focus stays on toggle', () => {
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {shiftKey: true, keyCode: 9, which: 9})
    cy.get('.pf-c-dropdown__toggle').last().should('not.have.class', 'pf-m-expanded');
    cy.focused().contains('Dropdown');
  });

  it('Arrow down places focus on next enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item').first().trigger('keydown', {keyCode: 40});
    cy.focused().contains('Action');
    //except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {keyCode: 40});
    cy.focused().contains('Link');
  });

  it('Arrow up places focus on previous enabled menu item', () => {
    cy.get('.pf-c-dropdown__menu-item').last().trigger('keydown', {keyCode: 38});
    cy.focused().contains('Separated Link');
    //except if focus is on the last enabled menu item, then places focus on the first enabled menu item
    cy.get('.pf-c-dropdown__menu-item').first().trigger('keydown', {keyCode: 38});
    cy.focused().contains('Separated Action');
  });

  // Needs to be last because of redirect
  it('Verify menu selection/link works', () => {
    cy.get('.pf-c-dropdown__menu-item').first().click();
    cy.url().should('eq', 'https://patternfly-react.surge.sh/patternfly-4/');
  });
});