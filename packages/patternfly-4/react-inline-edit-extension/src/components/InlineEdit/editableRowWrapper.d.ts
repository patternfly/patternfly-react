import { Component, FunctionComponent } from 'react';
import { RowWrapper, RowWrapperRow } from '@patternfly/react-table';

import { EditConfig } from './editableTableBody';

export interface EditableRowWrapperRow extends RowWrapperRow {
  isEditing: boolean;
  isTableEditing: boolean;
  isFirstVisible: boolean;
  isLastVisible: boolean;
  editConfig: EditConfig;
}

export interface EditableRowWrapperProps extends RowWrapper {
  row: EditableRowWrapperRow;
}

export interface EditableRowWrapper {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (bodyComponent: Component): FunctionComponent<EditableRowWrapperProps>;
}

/* eslint-disable no-undef */
export default EditableRowWrapper;
