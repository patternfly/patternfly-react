import * as React from 'react';
import { Body as BaseBody } from './base';
import { RowType, RowKeyType } from './base/types';
import { TableContext, IRow, IRowCell } from './Table';
import { isRowExpanded } from './utils';

export interface TableBodyProps {
  className?: string;
  children?: React.ReactNode;
  headerData?: IRow[];
  rows?: IRow[];
  rowKey?: RowKeyType;
  onRowClick?: Function;
  onRow?: Function;
}

const flagVisibility = (rows: IRow[]) => {
  const visibleRows = (rows as []).filter((oneRow: IRow) => !oneRow.parent || oneRow.isExpanded) as IRow[];
  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

class ContextBody extends React.Component<TableBodyProps, {}> {
  onRow = (row: IRow, rowProps: any) => {
    const { onRowClick, onRow } = this.props;
    const extendedRowProps = {
      ...rowProps,
      ...(onRow ? onRow(row, rowProps) : {})
    };
    return {
      row,
      rowProps: extendedRowProps,
      onMouseDown: (event: React.MouseEvent) => {
        const computedData = {
          isInput: (event.target as HTMLElement).tagName !== 'INPUT',
          isButton: (event.target as HTMLElement).tagName !== 'BUTTON'
        };
        onRowClick(event, row, rowProps, computedData);
      }
    };
  };

  mapCells = (headerData: IRow[], row: IRow, rowKey: number) => {
    // column indexes start after generated optional columns
    let additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;

    return {
      ...(row &&
        (row.cells || row).reduce(
          (acc: object, cell: IRowCell, cellIndex: number) => {
            const isCellObject = cell === Object(cell);

            const mappedCell = {
              [headerData[cellIndex + additionalColsIndexShift].property]: {
                title: isCellObject ? cell.title : cell,
                props: {
                  isVisible: true,
                  ...(isCellObject ? cell.props : null)
                }
              }
            };

            // increment the shift index when a cell spans multiple columns
            if (isCellObject && cell.props && cell.props.colSpan) {
              additionalColsIndexShift += cell.props.colSpan - 1;
            }
            return {
              ...acc,
              ...mappedCell
            };
          },
          { id: row.id !== undefined ? row.id : rowKey }
        ))
    };
  };

  render() {
    const { className, headerData, rows, rowKey, children, onRowClick, ...props } = this.props;

    let mappedRows;
    if (headerData.length > 0) {
      mappedRows = (rows as []).map((oneRow: IRow, oneRowKey: number) => ({
        ...oneRow,
        ...this.mapCells(headerData, oneRow, oneRowKey),
        isExpanded: isRowExpanded(oneRow, rows),
        isFirst: oneRowKey === 0,
        isLast: oneRowKey === rows.length - 1,
        isFirstVisible: false,
        isLastVisible: false
      })) as IRow[];
      flagVisibility(mappedRows);
    }

    return (
      <React.Fragment>
        {mappedRows && (
          <BaseBody
            {...props}
            mappedRows={mappedRows}
            rows={mappedRows as RowType[]}
            onRow={this.onRow}
            rowKey={rowKey}
            className={className}
          />
        )}
      </React.Fragment>
    );
  }
}

export const TableBody = ({
  onRow = (...args:any) => Object,
  className = '' as string,
  children = null as React.ReactNode,
  rowKey = 'id' as string,
  onRowClick = (...args: any) => undefined as any,
  ...props
}: TableBodyProps) => (
  <TableContext.Consumer>
    {({ headerData, rows }) => 
      <ContextBody 
        headerData={headerData} 
        rows={rows as IRow[]} 
        onRow={onRow}
        className={className}
        children={children}
        rowKey={rowKey}
        onRowClick={onRowClick} {...props} />}
  </TableContext.Consumer>
);