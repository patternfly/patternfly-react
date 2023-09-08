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

  it('Verify hoverTip and clickTip render', () => {
    cy.get('#tooltip-test .pf-v5-c-button.pf-m-control').focus();
    cy.get('.pf-v5-c-tooltip').should('have.text', 'Copy button not clicked');
    // Wait for defaulty entryDelay
    cy.wait(500);
    cy.get('#tooltip-test .pf-v5-c-button.pf-m-control').click();
    cy.get('.pf-v5-c-tooltip').should('have.text', 'Copy button clicked');
  });

  it('Verify onTooltipHidden callback is called', () => {
    cy.get('#onTooltipHidden-test .pf-v5-c-button.pf-m-control').focus();
    cy.get('.pf-v5-c-tooltip').should('have.text', 'onTooltipHidden not clicked');
    cy.get('#onTooltipHidden-test .pf-v5-c-button.pf-m-control').click();
    cy.get('.pf-v5-c-tooltip').should('have.text', 'onTooltipHidden clicked');
    cy.get('#onTooltipHidden-test input').focus();
    cy.wait(500);
    cy.get('#onTooltipHidden-test .pf-v5-c-button.pf-m-control').focus();
    // By default onTooltipHidden is called within ClipboardCopy to set internal copied state,
    // which will reset the tooltip content to the hoverTip prop value
    cy.get('.pf-v5-c-tooltip').should('have.text', 'onTooltipHidden not clicked');
  });
});
