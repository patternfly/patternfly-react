describe('Stack Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#stack-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/stack-demo-nav-link');
  });

  it('Verify gutter', () => {
    cy.get('.pf-l-stack').should('have.class', 'pf-m-gutter');
  });

  it('Verify filled stack item', () => {
    cy.get('.pf-l-stack__item').should('have.class', 'pf-m-fill');
  });

  it('Verify alternative badge component', () => {
    cy.get('.pf-c-page__main-section').find('span').first().should('have.class', 'pf-c-badge pf-m-unread');
  })

  it('Verify component prop', () => {
    cy.get('.pf-c-page__main-section').find('article')
  })
})
