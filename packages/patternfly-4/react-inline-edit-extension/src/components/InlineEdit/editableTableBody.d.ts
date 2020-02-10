import { Component, FunctionComponent, MouseEvent } from 'react';
import { TableBodyProps, IRowData, IExtraRowData } from '@patternfly/react-table';

import { TableEditConfirmation } from './constants';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IEditedCellData extends IExtraRowData {
  columnIndex: number;
  elementId?: string;
}

export interface EditConfig {
  editConfirmationType?: OneOf<typeof TableEditConfirmation, keyof typeof TableEditConfirmation>;
  onEditCellClicked?(value: MouseEvent, row: IRowData, extra: IEditedCellData): void;
  onEditConfirmed?(value: MouseEvent, row: IRowData, rowProps: IExtraRowData): void;
  onEditCanceled?(value: MouseEvent, row: IRowData, rowProps: IExtraRowData): void;
}

export interface InlineEditBodyProps extends TableBodyProps {
  editConfig: EditConfig;
}

export type EditableTableBody = (bodyComponent: Component) => FunctionComponent<InlineEditBodyProps>;

// eslint-disable-next-line no-undef
export default EditableTableBody;
