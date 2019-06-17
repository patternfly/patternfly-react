describe('Accordion Demo Test', () => {
  it('Navigate to Accordion section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#accordion-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/accordion-demo-nav-link');
  });

  it('Verify initial state', () => {
    const toggles = cy.get('#accordion-example .pf-c-accordion__toggle');
    toggles.should('have.length', 3);
    toggles.should('have.attr', 'aria-expanded', 'false');
    cy.get('#accordion-example .pf-m-expanded').should('not.exist');
  });

  it('Verify toggle open behavior', () => {
    cy.get('#item-1').click();
    cy.get('#item-1').should('have.attr', 'aria-expanded', 'true');
    cy.get('#item-2').should('have.attr', 'aria-expanded', 'false');
    cy.get('#item-3').should('have.attr', 'aria-expanded', 'false');
    const expandedContent = cy.get('#accordion-example .pf-c-accordion__expanded-content.pf-m-expanded');
    expandedContent.should('have.length', 1);
    expandedContent.should('have.attr', 'id', 'item-1-content');
  });

  it('Verify toggle switch behavior', () => {
    cy.get('#item-2').click();
    cy.get('#item-1').should('have.attr', 'aria-expanded', 'false');
    cy.get('#item-2').should('have.attr', 'aria-expanded', 'true');
    cy.get('#item-3').should('have.attr', 'aria-expanded', 'false');
    const expandedContent = cy.get('#accordion-example .pf-c-accordion__expanded-content.pf-m-expanded');
    expandedContent.should('have.length', 1);
    expandedContent.should('have.attr', 'id', 'item-2-content');
  });

  it('Verify toggle close behavior', () => {
    cy.get('#item-2').click();
    cy.get('#item-1').should('have.attr', 'aria-expanded', 'false');
    cy.get('#item-2').should('have.attr', 'aria-expanded', 'false');
    cy.get('#item-3').should('have.attr', 'aria-expanded', 'false');
    const expandedContent = cy.get('#accordion-example .pf-c-accordion__expanded-content.pf-m-expanded');
    expandedContent.should('not.exist');
  });
});
