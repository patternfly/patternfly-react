describe('Clipboard Copy Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/clipboard-copy-demo-nav-link');
  });

  it('Verify form input', () => {
    cy.get('.pf-v5-c-form-control > input').should('exist');
  });

  it('Verify content expands', () => {
    cy.get('.pf-v5-c-clipboard-copy__group [id*="toggle-"]').click();
    cy.get('.pf-v5-c-clipboard-copy__expandable-content').should('exist');
  });

  it('Verify inline clipboard copy', () => {
    cy.get('#inline-copy').should('have.class', 'pf-m-inline');
    cy.get('#inline-copy').should('have.class', 'pf-m-block');
  });

  it('Verify hoverTip and clickTip render and onTooltipHidden called', () => {
    cy.get('#tooltip-test .pf-v5-c-button.pf-m-control').focus();
    // Wait for default entryDelay of 300ms
    cy.wait(500);
    cy.get('.pf-v5-c-tooltip').should('have.text', 'Copy button not clicked');
    cy.get('#tooltip-test .pf-v5-c-button.pf-m-control').click();
    cy.get('.pf-v5-c-tooltip').should('have.text', 'Copy button clicked');
    cy.get('#tooltip-test input').focus();

    // By default onTooltipHidden is called to set internal copied state to false, which
    // would reset the tooltip content to the hoverTip prop value
    cy.wait(500);
    cy.get('#tooltip-test .pf-v5-c-button.pf-m-control').focus();
    cy.wait(500);
    cy.get('.pf-v5-c-tooltip').should('have.text', 'Copy button not clicked');
  });
});
