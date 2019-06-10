describe('Application Launcher Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#application-launcher-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/application-launcher-demo-nav-link');
  });
 
  it('Verify application launcher button', () => {
    cy.get('button').should('have.class', 'pf-c-button pf-m-plain');
  });

  it('Verify app launcher menu toggle', () => {
    cy.get('#pf-random-id-0').click();
    cy.get('ul').should('have.class', 'pf-c-app-launcher__menu');
    cy.get('#pf-random-id-0').click(); 
    cy.get('.pf-c-app-launcher__menu').should('not.exist'); 
  });

  // it('Verify onSelect', () => {
  //   cy.window().then(win => {
  //     const spy = cy.spy(win.console, "log");
  //     cy.get('#pf-random-id-0').click(); 
  //     cy.get('.pf-c-app-launcher__menu-item').first().click();
  //     win.console.log('hi'); 
  //     expect(spy).to.be.called.callCount(2);
  //   });
  // });
});
