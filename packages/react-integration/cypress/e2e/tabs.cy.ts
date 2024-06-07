describe('Tab Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/tab-demo-nav-link');
  });

  it('Verify tab2 can be hidden or shown', () => {
    cy.get('#pf-tab-1-demoTab2').should('not.exist');
    cy.get('#showTab2').click();
    cy.get('#pf-tab-1-demoTab2').should('exist');
  });

  it('Verify tabs, tab sections, and tab navigation', () => {
    cy.get('div#unconnectedChildren')
      .find('.pf-v5-c-tabs__link')
      .each((demoButton: JQuery<HTMLButtonElement>, index: number) => {
        const currentItem: number = index + 1;
        expect(demoButton.text()).to.equal(`Tab item ${currentItem}`);
        cy.wrap(demoButton).click();
        cy.get(`#demoTab${currentItem}Section`).then((demoSection: JQuery<HTMLElement>) => {
          expect(demoSection.prop('hidden')).to.equal(false);
          expect(demoSection.text()).to.equal(`Tab ${currentItem} section`);
        });
      });
  });

  it('Verify tabs mount on enter when specified', () => {
    cy.get('#pf-tab-0-mountOnEnter').should('have.attr', 'aria-controls', 'pf-tab-section-0-mountOnEnter');
    cy.get('#pf-tab-section-0-mountOnEnter').should('exist');
    cy.get('#pf-tab-1-mountOnEnter').should('not.have.have.attr', 'aria-controls', 'pf-tab-section-1-mountOnEnter');
    cy.get('#pf-tab-section-1-mountOnEnter').should('not.exist');
    cy.get('#pf-tab-1-mountOnEnter').click();
    cy.get('#pf-tab-0-mountOnEnter').should('not.have.attr', 'aria-controls', 'pf-tab-section-0-mountOnEnter');
    cy.get('#pf-tab-section-0-mountOnEnter').should('exist');
    cy.get('#pf-tab-1-mountOnEnter').should('have.have.attr', 'aria-controls', 'pf-tab-section-1-mountOnEnter');
    cy.get('#pf-tab-section-1-mountOnEnter').should('exist');
  });

  it('Verify tabs unmount on exit when specified', () => {
    cy.get('#pf-tab-section-0-unmountOnExit').should('exist');
    cy.get('#pf-tab-section-1-unmountOnExit').should('not.exist');
    cy.get('#pf-tab-1-unmountOnExit').click();
    cy.get('#pf-tab-section-0-unmountOnExit').should('not.exist');
    cy.get('#pf-tab-section-1-unmountOnExit').should('exist');
  });

  it('Verify box tabs', () => {
    cy.get('#boxTabs.pf-m-box').should('exist');
  });

  it('Verify vertical tabs', () => {
    cy.get('#verticalTabs.pf-m-vertical').should('exist');
  });

  it('Verify filled tabs', () => {
    cy.get('#filledTabs.pf-m-fill').should('exist');
  });

  it('Verify light variant box tabs', () => {
    cy.get('#boxLightVariantTabs.pf-m-box.pf-m-color-scheme--light-300').should('exist');
  });

  it('Verify className in tabs', () => {
    cy.get('.custom-tab-1').should('have.length', 1);
    cy.get('.custom-tab-2').should('have.length', 1);
  });

  it("Verify scroll buttons render when all tabs can't be displayed in the window", () => {
    cy.viewport(300, 792);
    cy.get('.pf-v5-c-tabs__scroll-button').should('exist');
    cy.viewport(1200, 792);
  });
});
