import * as React from 'react';
import { TableContext, TableBody, IExtraRowData } from '@patternfly-five/react-table';
import { Body } from '../Body';

export interface IEditedCellData extends IExtraRowData {
  columnIndex: number;
  elementId?: string;
}

export const editableTableBody = (BodyComponent: typeof TableBody) => {
  const InlineEditBody = ({ editConfig = null, onRowClick = () => {}, ...props }) => (
    <TableContext.Consumer>
      {({ rows, ...consumedProps }) => (
        <Body
          {...consumedProps}
          rows={rows}
          {...props}
          editConfig={editConfig}
          onRowClick={onRowClick}
          BodyComponent={BodyComponent}
        />
      )}
    </TableContext.Consumer>
  );

  return InlineEditBody;
};
