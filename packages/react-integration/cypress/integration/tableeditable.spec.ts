describe('Table Simple Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/table-editable-demo-nav-link');
  });

  it('Verify table string', () => {
    cy.get('caption').contains('Editable Table');
  });

  it('Check number of rows', () => {
    cy.get('.pf-v6-c-table').find('tr').should('have.length', 3);
  });

  it('Check number of columns', () => {
    cy.get('thead').find('th').should('have.length', 6);
  });

  it('Check edit', () => {
    cy.get(
      '.pf-m-inline-editable > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    ).type('test');
    cy.get(
      '.pf-m-inline-editable > [data-label="Dropdown col 5"] > .pf-v6-c-inline-edit__input > .pf-v6-c-menu-toggle > .pf-v6-c-menu-toggle__controls'
    ).click();
    cy.get('#uniqueIdRow1Cell5Option3').click();
    cy.get(
      '.pf-m-inline-editable > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click();
    cy.get(':nth-child(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__value').should(
      'have.text',
      'Row 1 cell 1 contenttest'
    );
    cy.get(':nth-child(1) > [data-label="Dropdown col 5"] > .pf-v6-c-inline-edit__value').should(
      'have.text',
      'Option 1, Option 3'
    );
  });

  it('Check can cancel edit', () => {
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(2) > [data-label="Text input col 4"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('xyz');
    cy.get(
      '.pf-m-inline-editable > [data-label="Dropdown col 5"] > .pf-v6-c-inline-edit__input > .pf-v6-c-menu-toggle > .pf-v6-c-menu-toggle__controls'
    ).click();
    cy.get('#uniqueIdRow2Cell5Option3').click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(2) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(2) > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(2) > [data-label="Text input col 4"] .pf-v6-c-inline-edit__value'
    ).should('have.text', 'Row 2 cell 4 content');
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(2) > [data-label="Dropdown col 5"] .pf-v6-c-inline-edit__value'
    ).should('have.text', 'Option 2');
  });

  it('Check failed validation displays error msg', () => {
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('foo');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > [data-label="Text input col 4"] .pf-v6-c-inline-edit__input'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(2) > .pf-v6-c-button'
    ).click();
  });

  it('Check failed validation sets aria-invalid', () => {
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('xyz');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > [data-label="Text input col 4"] .pf-v6-c-inline-edit__input .pf-v6-c-form-control > input'
    ).should('have.attr', 'aria-invalid', 'true');
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(2) > .pf-v6-c-button'
    ).click();
  });

  it('Check errors are unique per cell', () => {
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click(); // click the edit button
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('foo'); // enter foo into first field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    ).clear();
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('xyz'); // enter xyz into last field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters'); // ensure first field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure second field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 4"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'Value must be at least 7 characters, Value cannot be xyz'); // ensure last field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(2) > .pf-v6-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check relevant errors updated per cell each time row edit submission attempted', () => {
    cy.get(
      '.pf-v6-c-inline-edit tbody tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click(); // click the edit button
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('foo'); // enter foo into first field
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    ).clear(); // clear the third field text
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'Value cannot be "foo", Value must be at least 7 characters'); // ensure first field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure second field receives relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    )
      .clear()
      .type('1234567'); // update first field to valid entry
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(1) > .pf-v6-c-button'
    ).click(); // attempt to submit invalid entries
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 1"] > .pf-v6-c-inline-edit__input > .pf-v6-c-form-control > input'
    ).should('have.attr', 'aria-invalid', 'false'); // ensure first field releases error text
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > [data-label="Text input col 3"] > .pf-v6-c-inline-edit__input'
    ).should('have.text', 'This field is required, Value must be at least 7 characters'); // ensure third field STILL has relevant error texts
    cy.get(
      '.pf-m-inline-editable:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > :nth-child(2) > .pf-v6-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check edit action buttons have default aria labels', () => {
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Place row 0 in edit mode'); // first row should have default aria-label for edit button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:first-of-type() > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Save row edits for row 0'); // first row should have default aria-label for save button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:nth-of-type(2) > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Cancel row edits for row 0'); // first row should have default aria-label for cancel button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(1) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:nth-of-type(2) > .pf-v6-c-button'
    ).click(); // cancel edit to revert row back to original state
  });

  it('Check edit action buttons can have customized aria labels', () => {
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Edit row 1'); // first row should have customized aria-label for edit button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action .pf-v6-c-inline-edit__action.pf-m-enable-editable > .pf-v6-c-button'
    ).click();
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:first-of-type() > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Save edits for row 1'); // first row should have customized aria-label for save button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:nth-of-type(2) > .pf-v6-c-button'
    ).should('have.attr', 'aria-label', 'Cancel edits for row 1'); // first row should have customized aria-label for cancel button
    cy.get(
      '.pf-v6-c-inline-edit tr:nth-of-type(2) > .pf-v6-c-table__inline-edit-action > .pf-v6-c-inline-edit__group > .pf-v6-c-inline-edit__action:nth-of-type(2) > .pf-v6-c-button'
    ).click(); // cancel edit to revert row back to original state
  });
});
