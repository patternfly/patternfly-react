describe('Tab Demo Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/tabs-horizontal-overflow-demo-nav-link');
  });

  it('Allows users to select a tab from the overflow menu', () => {
    // verify that the expected tabs are showing/not showing as expected based on screen size
    [
      'Tab item 1',
      'Tab item 2',
      'Tab item 3',
      'Tab item 4',
      'Tab item 5',
      'Tab item 6',
      'Tab item 7',
      'More'
    ].forEach(tab => cy.contains('.pf-c-tabs__link', tab).should('exist'));
    ['Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach(tab => cy.contains(tab).should('not.exist'));

    // open the overflow menu and verify that the overflowing tabs are now visible within it
    cy.contains('.pf-c-tabs__link', 'More').click();
    ['Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach(menuItem =>
      cy.contains(menuItem).should('exist')
    );

    // select a tab and verify that it replaces the default overflow tab text, closes the overflow menu, and shows its content
    cy.contains('Tab item 9').click();
    cy.contains('.pf-c-tabs__link', 'More').should('not.exist');
    cy.contains('.pf-c-tabs__link', 'Tab item 9').should('exist');
    ['Tab item 8', 'Tab item 10', 'Tab item 11'].forEach(menuItem => cy.contains(menuItem).should('not.exist'));
    cy.contains('Tab 9 section').should('not.be.hidden');

    // select a non-overflow tab and verify that overflow tab text returns to the default and the now selected tab content shows
    cy.contains('Tab item 1').click();
    cy.contains('Tab item 9').should('not.exist');
    cy.contains('.pf-c-tabs__link', 'More').should('exist');
    cy.contains('Tab 9 section').should('be.hidden');
    cy.contains('Tab 1 section').should('not.be.hidden');
  });

  it('Adjusts tabs showing on resize', () => {
    // shrink viewport and verify that tabs which would now overflow are moved to the overflow tab
    cy.viewport(700, 792);
    ['Tab item 1', 'Tab item 2', 'Tab item 3', 'Tab item 4', 'Tab item 5', 'More'].forEach(tab =>
      cy.contains('.pf-c-tabs__link', tab).should('exist')
    );
    ['Tab item 6', 'Tab item 7', 'Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach(tab =>
      cy.contains(tab).should('not.exist')
    );
    cy.contains('.pf-c-tabs__link', 'More').click();
    ['Tab item 6', 'Tab item 7', 'Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach(tab =>
      cy.contains(tab).should('exist')
    );

    // expand the viewport and verify that all tabs are shown and the overflow tab is removed
    cy.viewport(1800, 792);
    [
      'Tab item 1',
      'Tab item 2',
      'Tab item 3',
      'Tab item 4',
      'Tab item 5',
      'Tab item 6',
      'Tab item 7',
      'Tab item 8',
      'Tab item 9',
      'Tab item 10',
      'Tab item 11'
    ].forEach(tab => cy.contains('.pf-c-tabs__link', tab).should('exist'));
    cy.contains('.pf-c-tabs__link', 'More').should('not.exist');
  });

  it('Allows overflow tab customization via HorizontalOverflowObject properties', () => {
    // verify that tab count can be shown and that the count updates on resize
    cy.get('#toggle-show-count-overflow').click();
    cy.contains('.pf-c-tabs__link', 'More (5)').should('exist');
    cy.viewport(700, 792);
    cy.contains('.pf-c-tabs__link', 'More (6)').should('exist');
    cy.get('#toggle-show-count-overflow').click();

    // verify that the default overflow tab title text can be changed and still behaves as the default text should
    cy.get('#toggle-change-toggle-text').click();
    cy.contains('.pf-c-tabs__link', 'More').should('not.exist');
    cy.contains('.pf-c-tabs__link', 'Overflow').should('exist');
    cy.contains('.pf-c-tabs__link', 'Overflow').click();
    cy.contains('Tab item 9').click();
    cy.contains('.pf-c-tabs__link', 'Overflow').should('not.exist');
    cy.contains('Tab item 1').click();
    cy.contains('.pf-c-tabs__link', 'Overflow').should('exist');
    cy.get('#toggle-change-toggle-text').click();

    // verify that the overflow tab aria label can be updated
    cy.contains('.pf-c-tabs__link', 'More').should('not.have.attr', 'aria-label');
    cy.get('#toggle-add-aria-label').click();
    cy.contains('.pf-c-tabs__link', 'More').should('have.attr', 'aria-label', 'Overflow aria label');
    cy.get('#toggle-add-aria-label').click();
  });
});
