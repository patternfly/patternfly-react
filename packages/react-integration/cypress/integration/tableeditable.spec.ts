describe('Table Simple Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#table-editable-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/table-editable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Editable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-c-table')
      .find('tr')
      .should('have.length', 3);
  });

  it('Check number of columns', () => {
    cy.get('thead')
      .find('th')
      .should('have.length', 6);
  });

  it('Check edit', () => {
    cy.get(
      '.pf-m-inline-editable > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-c-form-control'
    ).type('test');
    cy.get(
      '.pf-m-inline-editable > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click();
    cy.get(':nth-child(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__value').should(
      'have.text',
      'Row 1 cell 1 contenttest'
    );
  });

  it('Check can cancel edit', () => {
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(2) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(2) > [data-label="Text input col 4"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('xyz');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(2) > [data-label="Dropdown col 5"] > .pf-c-inline-edit__input > .pf-c-select'
    ).click();
    cy.get('button#uniqueIdRow2Cell5Option3-3').click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(2) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(2) > .pf-c-button'
    ).click();
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(2) > [data-label="Text input col 4"] .pf-c-inline-edit__value'
    ).should('have.text', 'Row 2 cell 4 content');
    cy.get('.pf-c-inline-edit tbody tr:nth-of-type(2) > [data-label="Dropdown col 5"] .pf-c-inline-edit__value').should(
      'have.text',
      'Option 2'
    );
  });

  it('Check failed validation displays error msg', () => {
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('foo');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click();
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > [data-label="Text input col 4"] .pf-c-inline-edit__input .pf-m-error'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(2) > .pf-c-button'
    ).click();
  });

  it('Check failed validation sets aria-invalid', () => {
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('xyz');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click();
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > [data-label="Text input col 4"] .pf-c-inline-edit__input .pf-c-form-control'
    ).should('have.attr', 'aria-invalid', 'true');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(2) > .pf-c-button'
    ).click();
  });

  it('Check errors are unique per cell', () => {
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click(); // click the edit button
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('foo'); // enter foo into first field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-c-inline-edit__input > .pf-c-form-control'
    ).clear();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('xyz'); // enter xyz into last field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters'); // ensure first field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure second field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'Value must be at least 7 characters, Value cannot be xyz'); // ensure last field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(2) > .pf-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check relevant errors updated per cell each time row edit submission attempted', () => {
    cy.get(
      '.pf-c-inline-edit tbody tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click(); // click the edit button
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('foo'); // enter foo into first field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-c-inline-edit__input > .pf-c-form-control'
    ).clear(); // clear the third field text
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters'); // ensure first field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure second field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-c-form-control'
    )
      .clear()
      .type('1234567'); // update first field to valid entry
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(1) > .pf-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-c-inline-edit__input > .pf-c-form-control'
    ).should('have.attr', 'aria-invalid', 'false'); // ensure first field releases error text
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-c-inline-edit__input > .pf-m-error'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure third field STILL has relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > :nth-child(2) > .pf-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check edit action buttons have default aria labels', () => {
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Place row 0 in edit mode'); // first row should have default aria-label for edit button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(1) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click();
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:first-of-type() > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Save row edits for row 0'); // first row should have default aria-label for save button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:nth-of-type(2) > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Cancel row edits for row 0'); // first row should have default aria-label for cancel button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(1) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:nth-of-type(2) > .pf-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check edit action buttons can have customized aria labels', () => {
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(2) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Edit row 1'); // first row should have customized aria-label for edit button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(2) > .pf-c-table__inline-edit-action .pf-c-inline-edit__action.pf-m-enable-editable > .pf-c-button'
    ).click();
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(2) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:first-of-type() > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Save edits for row 1'); // first row should have customized aria-label for save button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(2) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:nth-of-type(2) > .pf-c-button'
    ).should('have.attr', 'aria-label', 'Cancel edits for row 1'); // first row should have customized aria-label for cancel button
    cy.get(
      '.pf-c-inline-edit tr:nth-of-type(2) > .pf-c-table__inline-edit-action > .pf-c-inline-edit__group > .pf-c-inline-edit__action:nth-of-type(2) > .pf-c-button'
    ).click(); // cancel edit to revert row back to original state
  });
});
