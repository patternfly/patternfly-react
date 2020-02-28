import React from 'react';
import { InlineEdit } from '../../InlineEdit/';

/*
Creates a reactabular formatter:

(<value>, {
  rowData: <object>,
  property: <string>,
  column: <column>,
  columnIndex: <number>,
  rowIndex: <number> }) => <string|React element>
*/
const inlineEditFormatterFactory = ({ isEditing, renderValue, renderEdit } = {}) => (value, additionalData) => (
  <InlineEdit
    value={value}
    additionalData={additionalData}
    isEditing={isEditing}
    renderValue={renderValue}
    renderEdit={renderEdit}
  />
);

export default inlineEditFormatterFactory;
