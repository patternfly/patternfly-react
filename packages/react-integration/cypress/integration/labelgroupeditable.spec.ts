describe('Label Group Editable Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/labelgroup-editable-demo-nav-link');
  });

  it('Verify editing first label', () => {
    cy.get('#editable-label-1').contains('Editable label');
    cy.get('#editable-label-1').focus().type('{enter}test{enter}');
    cy.get('#editable-label-1').contains('Editable labeltest');
  });

  it('Verify cancelling edit on second label', () => {
    cy.get('#editable-label-2').contains('Editable label 2');
    cy.get('#editable-label-2').focus().type('{enter}testcancel{esc}');
    cy.get('#editable-label-2').contains('Editable label 2');
  });

  it('Verify editing third label with click off', () => {
    cy.get('#editable-label-3').contains('Editable label 3');
    cy.get('#editable-label-3').focus().type('{enter}testclick');
    cy.get('#editable-label-3')
      .closest('.pf-v6-c-label')
      .should('have.class', 'pf-v6-c-label pf-m-blue pf-m-filled pf-m-editable pf-m-editable-active');
    cy.get('.pf-v6-c-page__main-container').click();
    cy.get('#editable-label-3')
      .closest('.pf-v6-c-label')
      .should('have.class', 'pf-v6-c-label pf-m-blue pf-m-filled pf-m-editable');
    cy.get('#editable-label-3').contains('Editable label 3testclick');
  });
});
