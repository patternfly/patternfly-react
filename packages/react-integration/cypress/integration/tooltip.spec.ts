describe('Tooltip Demo Test', () => {
  it('Navigate to tooltip section', () => {
    cy.visit('http://localhost:3000/tooltip-demo-nav-link');
  });

  const defaultEntryDelay = 300;
  const defaultExitDelay = 300;

  it('Renders Tooltip on hover by default', () => {
    ['tooltip-children', 'tooltip-selector', 'tooltip-ref'].forEach((id) => {
      cy.get(`[id="${id}-trigger"]`).then((tooltipTrigger: JQuery<HTMLButtonElement>) => {
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('not.exist');
        cy.wrap(tooltipTrigger).trigger('mouseenter');
        cy.wait(defaultEntryDelay);
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('exist');
        cy.wrap(tooltipTrigger).trigger('mouseleave');
        cy.wait(defaultExitDelay);
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('not.exist');
      });
    });
  });

  it('Renders Tooltip on focus by default', () => {
    ['tooltip-children', 'tooltip-selector', 'tooltip-ref'].forEach((id) => {
      cy.get(`[id="${id}-trigger"]`).then((tooltipTrigger: JQuery<HTMLButtonElement>) => {
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('not.exist');
        cy.wrap(tooltipTrigger).trigger('focus');
        cy.wait(defaultEntryDelay);
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('exist');
        cy.wrap(tooltipTrigger).trigger('blur');
        cy.wait(defaultExitDelay);
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('not.exist');
      });
    });
  });

  it('Remains rendered when Tooltip is hovered', () => {
    ['tooltip-children', 'tooltip-selector', 'tooltip-ref'].forEach((id) => {
      cy.get(`[id="${id}-trigger"]`).then((tooltipTrigger: JQuery<HTMLButtonElement>) => {
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('not.exist');
        cy.wrap(tooltipTrigger).trigger('mouseenter');
        cy.wait(defaultEntryDelay);
        cy.get(`#${id}-content.pf-v6-c-tooltip`).should('exist');
      });
      cy.get(`#${id}-content.pf-v6-c-tooltip`).trigger('mouseenter');
      cy.wait(defaultExitDelay + 100);
      cy.get(`#${id}-content.pf-v6-c-tooltip`).should('exist');
      cy.get(`#${id}-content.pf-v6-c-tooltip`).trigger('mouseleave').should('not.exist');
    });
  });

  it('Renders tooltip on click', () => {
    cy.get('#tooltip-click-trigger').trigger('mouseenter');
    cy.get('#tooltip-click-content.pf-v6-c-tooltip').should('not.exist');
    cy.get('#tooltip-click-trigger').trigger('focus');
    cy.get('#tooltip-click-content.pf-v6-c-tooltip').should('not.exist');
    cy.get('#tooltip-click-trigger').click();
    cy.wait(defaultEntryDelay);
    cy.get('#tooltip-click-content.pf-v6-c-tooltip').should('exist');
    cy.get('#tooltip-click-content.pf-v6-c-tooltip').click();
    cy.wait(defaultExitDelay);
    cy.get('#tooltip-click-content.pf-v6-c-tooltip').should('not.exist');
  });

  it.skip('Renders with passed in entryDelay and exitDelay', () => {
    cy.get('#tooltip-delay-trigger').trigger('mouseenter');
    cy.wait(defaultEntryDelay);
    cy.get('#tooltip-delay-content.pf-v6-c-tooltip').should('not.exist');
    cy.wait(200);
    cy.get('#tooltip-delay-content.pf-v6-c-tooltip').should('exist');
    cy.get('#tooltip-delay-trigger').trigger('mouseleave');
    cy.wait(defaultExitDelay);
    cy.get('#tooltip-delay-content.pf-v6-c-tooltip').should('exist');
    cy.wait(200);
    cy.get('#tooltip-delay-content.pf-v6-c-tooltip').should('not.exist');
  });

  it('Renders with passed in animationDuration styling', () => {
    cy.get('#tooltip-animationDuration-trigger').trigger('mouseenter');
    cy.wait(defaultEntryDelay);
    cy.get('#tooltip-animationDuration-content.pf-v6-c-tooltip').then((tooltipContent) => {
      expect(tooltipContent)
        .to.have.attr('style')
        .match(/transition: opacity 500ms/);
    });
    cy.get('#tooltip-animationDuration-trigger').trigger('mouseleave');
    cy.wait(defaultExitDelay);
  });
});
