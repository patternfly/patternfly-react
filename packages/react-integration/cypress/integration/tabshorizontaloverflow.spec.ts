describe('Tab Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/tabs-horizontal-overflow-demo-nav-link');
  });

  // Re-enable once https://github.com/patternfly/patternfly/issues/7449 is resolved
  xit('Adjusts tabs showing on resize', () => {
    // shrink viewport and verify that tabs which would now overflow are moved to the overflow tab
    cy.viewport(700, 792);
    ['Tab item 1', 'Tab item 2', 'Tab item 3', 'Tab item 4', 'Tab item 5', 'More'].forEach((tab) =>
      cy.contains('.pf-v6-c-tabs__link', tab).should('exist')
    );
    ['Tab item 6', 'Tab item 7', 'Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach((tab) =>
      cy.contains(tab).should('not.exist')
    );
    cy.contains('.pf-v6-c-tabs__link', 'More').click();
    ['Tab item 6', 'Tab item 7', 'Tab item 8', 'Tab item 9', 'Tab item 10', 'Tab item 11'].forEach((tab) =>
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
    ].forEach((tab) => cy.contains('.pf-v6-c-tabs__link', tab).should('exist'));
    cy.contains('.pf-v6-c-tabs__link', 'More').should('not.exist');
  });

  it('Allows selection of tabs from overflow tab menu', () => {
    cy.contains('Tab 1 section').should('not.be.hidden');
    cy.contains('Tab 9 section').should('be.hidden');
    cy.contains('.pf-v6-c-tabs__link', 'More').click();
    cy.contains('Tab item 9').click();
    cy.contains('Tab 9 section').should('not.be.hidden');
    cy.contains('Tab 1 section').should('be.hidden');
  });
});
