import * as React from 'react';
import { Body as BaseBody } from './base';
import { RowType, RowKeyType } from './base/types';
import { IRow, IRowCell, IExtraRowData } from './TableTypes';
import { TableContext } from './TableContext';
import { isRowExpanded } from './utils';

export interface IComputedData {
  isInput: boolean;
  isButton: boolean;
}

export type OnRowClick = (
  event: React.KeyboardEvent | React.MouseEvent,
  row: IRow,
  rowProps: IExtraRowData,
  computedData: IComputedData
) => void;

export interface TableBodyProps {
  /** Additional classes added to the TableBody  */
  className?: string;
  /** @hide This prop should not be set manually  */
  children?: React.ReactNode;
  /** @hide This prop should not be set manually  */
  headerData?: IRow[];
  /** @hide This prop should not be set manually  */
  rows?: IRow[];
  /** @hide This prop should not be set manually  */
  rowKey?: RowKeyType;
  /** A click handler for the row  */
  onRowClick?: OnRowClick;
  /** @hide This prop should not be set manually  */
  onRow?: Function;
  /** Flag indicating the <tbody> contains oddly striped rows. */
  isOddStriped?: boolean;
  /** Flag indicating the <tbody> contains evenly striped rows. */
  isEvenStriped?: boolean;
}

const flagVisibility = (rows: IRow[]) => {
  const visibleRows = (rows as IRow[]).filter((oneRow: IRow) => !oneRow.parent || oneRow.isExpanded) as IRow[];
  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

interface IMappedCell {
  [name: string]: IRowCell;
}

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
      onClick: (event: React.MouseEvent) => {
        const tagName = (event.target as HTMLElement).tagName;
        const computedData = {
          isInput: tagName === 'INPUT',
          isButton: tagName === 'BUTTON'
        };

        onRowClick(event, row, rowProps, computedData);
      },
      onKeyDown: (event: React.KeyboardEvent) => {
        const targetElement = event.target as HTMLElement;
        const tagName = targetElement.tagName;
        const computedData = {
          isInput: tagName === 'INPUT',
          isButton: tagName === 'BUTTON'
        };
        if (event.key === 'Enter' || event.key === ' ') {
          onRowClick(event, row, rowProps, computedData);

          // prevent event default if space is typed while focusing on a hoverable row
          // so that the page does not scroll when trying to use spacebar to select a row
          if (event.key === ' ' && !!targetElement.closest('.pf-m-hoverable')) {
            event.preventDefault();
          }
        }
      }
    };
  };

  mapCells = (headerData: IRow[], row: IRow, rowKey: number) => {
    // column indexes start after generated optional columns like collapsible or select column(s)
    const { firstUserColumnIndex } = headerData[0].extraParams;
    const isFullWidth = row && row.fullWidth;
    // typically you'd want to map each cell to its column header, but in the case of fullWidth
    // the first column could be the Select and/or Expandable column
    let additionalColsIndexShift = isFullWidth ? 0 : firstUserColumnIndex;
    return {
      ...(row &&
        (row.cells || row).reduce(
          (acc: object, cell: IRowCell, cellIndex: number) => {
            const isCellObject = cell === Object(cell);
            const isCellFunction = cell && typeof cell.title === 'function';
            let formatters: any = [];
            if (isCellObject && cell.formatters) {
              // give priority to formatters specified on the cell object
              // expandable example:
              // rows: [{ parent: 0, fullWidth: true, cells: [{ title: 'fullWidth, child - a', formatters: [expandable]}] }]
              formatters = cell.formatters;
            } else if (isFullWidth && cellIndex < firstUserColumnIndex) {
              // for backwards compatibility, map the cells that are not under user columns (like Select/Expandable)
              // to the first user column's header formatters
              formatters = headerData[firstUserColumnIndex].cell.formatters;
            }
            let mappedCellTitle: IRowCell | Function | IRowCell['title'] = cell;
            if (isCellObject && isCellFunction) {
              mappedCellTitle = (cell.title as Function)(cell.props.value, rowKey, cellIndex, cell.props);
            } else if (isCellObject) {
              mappedCellTitle = cell.title;
            }
            const mappedCell: IMappedCell = {
              [headerData[cellIndex + additionalColsIndexShift].property]: {
                title: mappedCellTitle as React.ReactNode,
                formatters,
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
          { secretTableRowKeyId: row.id !== undefined ? row.id : rowKey }
        ))
    };
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, headerData, rows, rowKey, children, onRowClick, ...props } = this.props;

    let mappedRows: IRow[];
    if (headerData.length > 0) {
      mappedRows = (rows as IRow[]).map((oneRow: IRow, oneRowKey: number) => ({
        ...oneRow,
        ...this.mapCells(headerData, oneRow, oneRowKey),
        isExpanded: isRowExpanded(oneRow, rows),
        isHeightAuto: oneRow.heightAuto || false,
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
  className = '' as string,
  children = null as React.ReactNode,
  rowKey = 'secretTableRowKeyId' as string,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  onRow = (...args: any) => ({}),
  onRowClick = (
    event: React.MouseEvent | React.KeyboardEvent,
    row: IRow,
    rowProps: IExtraRowData,
    computedData: IComputedData
  ) =>
    /* eslint-enable @typescript-eslint/no-unused-vars */
    undefined as OnRowClick,
  ...props
}: TableBodyProps) => (
  <TableContext.Consumer>
    {({ headerData = [], rows = [], ...rest }) => (
      <ContextBody
        headerData={headerData}
        rows={rows as IRow[]}
        onRow={onRow}
        className={className}
        rowKey={rowKey}
        onRowClick={onRowClick}
        {...props}
        {...rest}
      >
        {children}
      </ContextBody>
    )}
  </TableContext.Consumer>
);
