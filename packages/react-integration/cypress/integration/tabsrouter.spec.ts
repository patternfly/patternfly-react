// Generated with OpenCode (GPT-6.1).
describe('Tabs React Router navigation', () => {
  const usersTab = '#pf-tab-users-router-tabs';
  const containersTab = '#pf-tab-containers-router-tabs';
  const disabledTab = '#pf-tab-disabled-router-tabs';
  const ariaDisabledTab = '#pf-tab-aria-disabled-router-tabs';

  // Cypress 14 supports cross-browser native Tab presses, but not Enter.
  // Tests using this Chromium-only helper explicitly exclude Firefox; the other router tests run in both browsers.
  const pressEnter = () =>
    cy
      .then(() =>
        Cypress.automation('remote:debugger:protocol', {
          command: 'Input.dispatchKeyEvent',
          params: { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, text: '\r' }
        })
      )
      .then(() =>
        Cypress.automation('remote:debugger:protocol', {
          command: 'Input.dispatchKeyEvent',
          params: { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 }
        })
      );

  beforeEach(() => {
    cy.visit('http://localhost:3000/tabs-router-demo-nav-link?tab=users');
    cy.get(usersTab).should('have.attr', 'aria-selected', 'true');
  });

  it('navigates through React Router without reloading or replacing the focused link', () => {
    cy.document().then((originalDocument) => {
      cy.get(containersTab).then(($link) => {
        const originalLink = $link[0];
        cy.wrap($link).click();

        cy.location('search').should('equal', '?tab=containers');
        cy.get(containersTab).should('have.attr', 'aria-selected', 'true').and('have.focus');
        cy.get(containersTab).should(($currentLink) => {
          expect($currentLink[0]).to.equal(originalLink);
        });
        cy.get('#pf-tab-section-containers-router-tabs')
          .should('be.visible')
          .and('contain.text', 'Containers route content');
        cy.get('#router-selection-count').should('have.text', 'Selections: 1');
        cy.get('#router-click-count').should('have.text', 'Clicks: 1');
        cy.document().should('equal', originalDocument);
      });
    });
  });

  it('supports keyboard navigation and keeps focus after activation', { browser: '!firefox' }, () => {
    cy.get(usersTab).focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get(containersTab).should('have.focus');
    pressEnter();

    cy.location('search').should('equal', '?tab=containers');
    cy.get(containersTab).should('have.attr', 'aria-selected', 'true').and('have.focus');
    cy.get('#pf-tab-section-containers-router-tabs').should('be.visible');
    cy.get('#router-selection-count').should('have.text', 'Selections: 1');
    cy.get('#router-click-count').should('have.text', 'Clicks: 1');
  });

  it('blocks mouse navigation and caller handlers for disabled links', () => {
    [disabledTab, ariaDisabledTab].forEach((selector) => {
      cy.get(selector).should('have.attr', 'aria-disabled', 'true').click({ force: true });
      cy.location('search').should('equal', '?tab=users');
    });

    cy.get(usersTab).should('have.attr', 'aria-selected', 'true');
    cy.get('#router-selection-count').should('have.text', 'Selections: 0');
    cy.get('#router-click-count').should('have.text', 'Clicks: 0');
  });

  it('blocks keyboard navigation and caller handlers for disabled links', { browser: '!firefox' }, () => {
    [disabledTab, ariaDisabledTab].forEach((selector) => {
      cy.get(selector).focus();
      pressEnter();
      cy.location('search').should('equal', '?tab=users');
    });

    cy.get(usersTab).should('have.attr', 'aria-selected', 'true');
    cy.get('#router-selection-count').should('have.text', 'Selections: 0');
    cy.get('#router-click-count').should('have.text', 'Clicks: 0');
  });

  it('skips disabled links but allows focusing an aria-disabled link and its tooltip', () => {
    cy.get(disabledTab).should('have.attr', 'tabindex', '-1');
    cy.get(containersTab).focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get(ariaDisabledTab).should('have.focus');
    cy.get('.pf-v6-c-tooltip').should('be.visible').and('contain.text', 'This route is unavailable.');
  });

  it('restores route-based selection with browser Back', () => {
    cy.get(containersTab).click();
    cy.location('search').should('equal', '?tab=containers');

    cy.go('back');

    cy.location('search').should('equal', '?tab=users');
    cy.get(usersTab).should('have.attr', 'aria-selected', 'true');
    cy.get('#pf-tab-section-users-router-tabs').should('be.visible').and('contain.text', 'Users route content');
    cy.get('#router-selection-count').should('have.text', 'Selections: 1');
  });
});
