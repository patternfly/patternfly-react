import { Component, FunctionComponent, MouseEvent } from 'react';
import { TableBodyProps } from '@patternfly/react-table';
import { OneOf } from '@patternfly/react-core';

import { TableEditConfirmation } from './constants'


export interface RowData {
}

export interface RowProps {
  rowIndex: number;
  rowKey: string;
}

export interface RowExtraProps extends RowProps {
  columnIndex: number;
}

export interface EditConfig {
  editConfirmationType?: OneOf<typeof TableEditConfirmation, keyof typeof TableEditConfirmation>;
  onEditCellChanged?(value: MouseEvent, row: RowData, extra: RowExtraProps): void;
  onEditConfirmed?(value: MouseEvent, row: RowData, rowProps: RowProps): void;
  onEditCanceled?(value: MouseEvent, row: RowData, rowProps: RowProps): void;
}

export interface InlineEditBodyProps extends TableBodyProps {
  editConfig: EditConfig;
}


export interface EditableTableBody {
  (bodyComponent: Component): FunctionComponent<InlineEditBodyProps>;
}

export default EditableTableBody;
