describe('Clipboard Copy Expanded Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#clipboard-copy-expanded-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/clipboard-copy-expanded-demo-nav-link');
  });

  it('Verify clipboard is expanded by default', () => {
    cy.get('.pf-c-clipboard-copy').should('have.class', 'pf-m-expanded');
  });
});
