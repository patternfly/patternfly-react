describe('Context Selector Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/code-editor-demo-nav-link');
  });

  it('Verify code editor contents controlled', () => {
    cy.wait(1000);
    cy.get('.view-lines')
      .first()
      .then((code) => expect(code).to.have.text('test'));
    cy.get('#reset-code').click();
    cy.wait(1000);
    cy.get('.view-lines')
      .first()
      .then((code) => expect(code).to.have.text('resetcode'));
  });
});
