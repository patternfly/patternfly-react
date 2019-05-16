describe('Chip Group Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#chipgroup-demo-nav-item-link').click(); 
    cy.url().should('eq', 'http://localhost:3000/chipgroup-demo-nav-link');
  });

  it('Verify chip default text', () => {
    cy.get('.pf-c-chip__text').first().contains('Lemons'); 
  });

  it('Verify chip has badge', () => {
    cy.get('span').children('.pf-c-badge')
  })

  it('Verify more button works', () => {
    cy.get('.pf-m-overflow').children('button').click();
  });

  it('Verify delete button on first chip', () => {
    cy.get('.pf-c-chip').children('#remove_pf-random-id-0').click();
  });
});