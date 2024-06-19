describe('Disabled Tab Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/tabs-disabled-demo-nav-link');
  });

  const tabIds = {
    notDisabled: {
      button: '#pf-tab-0-not-disabled',
      content: '#pf-tab-section-0-not-disabled'
    },
    disabled: {
      button: '#pf-tab-1-is-disabled',
      content: '#pf-tab-section-1-is-disabled'
    },
    ariaDisabled: {
      button: '#pf-tab-2-is-aria-disabled',
      content: '#pf-tab-section-2-is-aria-disabled'
    },
    withTooltip: {
      button: '#pf-tab-3-with-tooltip',
      content: '#pf-tab-section-3-with-tooltip'
    }
  };
  const { notDisabled, disabled, ariaDisabled, withTooltip } = tabIds;

  it('Verify disabled tabs', () => {
    cy.get('#disabledTabs').within(() => {
      cy.get(notDisabled.content).should('not.have.a.property', 'hidden');
      cy.get(disabled.button).click({ force: true });
      cy.get(disabled.content).should('not.exist');
      cy.get(notDisabled.content).should('not.have.a.property', 'hidden');
      cy.get(ariaDisabled.button).click({ force: true });
      cy.get(ariaDisabled.content).should('not.exist');
      cy.get(notDisabled.content).should('not.have.a.property', 'hidden');
      cy.get(withTooltip.button).click({ force: true });
      cy.get(withTooltip.content).should('not.exist');
      cy.get(notDisabled.content).should('not.have.a.property', 'hidden');
    });
  });

  it('Verify aria-disabled with tooltip', () => {
    cy.get(withTooltip.button).trigger('mouseover');
    cy.get('.pf-v5-c-tooltip').should('be.visible');
  });
});
