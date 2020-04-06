import * as React from 'react';
import {
  TableBodyProps,
  isRowExpanded,
  IRowData,
  IExtraRowData,
  TableBody,
  IRow,
  IComputedData
} from '@patternfly/react-table';
import { showIdWarnings, TableEditConfirmation } from '../../utils';
import { IEditedCellData } from '../InlineEdit/editableTableBody';

const resolveCascadeEditability = (rows: ExtendedIRow[]) => {
  // eslint-disable-next-line no-undef
  const isRowExpandedIndexes = new Set(
    rows.map((row, idx) => (isRowExpanded(row, rows) ? idx : null)).filter(row => row !== null)
  );

  // flag parents and their children which are edited together
  rows
    .filter(
      (row, idx) =>
        row.parent !== undefined &&
        row.isEditing &&
        isRowExpandedIndexes.has(idx) &&
        row.isEditableTogetherWithParent &&
        rows[row.parent].isEditing
    )
    .forEach(row => {
      rows[row.parent].isChildEditing = true;
      row.isParentEditing = true;
    });

  const lastVisibleRow = rows.filter((row, idx) => !row.parent || isRowExpandedIndexes.has(idx)).pop();

  // flag last parent row if there are only descendants under it
  if (lastVisibleRow && lastVisibleRow.isParentEditing) {
    let parentRow = lastVisibleRow;
    while (parentRow.parent !== undefined && parentRow.isEditableTogetherWithParent) {
      parentRow = rows[parentRow.parent];
    }
    parentRow.isLastVisibleParent = true;
  }
};

const onRow = (
  event: React.MouseEvent<Element, MouseEvent>,
  row: IRow,
  rowProps: IExtraRowData,
  computedData: IComputedData,
  { onRowClick, editConfig }: InlineEditBodyProps
) => {
  const target = event.target as any;
  const cell = target.closest('[data-key]');
  // eslint-disable-next-line radix
  const cellNumber = parseInt(cell && cell.getAttribute('data-key'), 10);
  const hasCellNumber = !Number.isNaN(cellNumber);

  let onEditCellClicked: () => void;

  if (hasCellNumber && editConfig && typeof editConfig.onEditCellClicked === 'function') {
    // resolve closest (e.g. for dropdowns) usable id of a clicked element inside a cell
    const idElement = target.closest('[id]');
    const elementId = idElement && cell.contains(idElement) ? idElement.getAttribute('id') || null : null;

    if (!elementId) {
      showIdWarnings(row, target);
    }

    onEditCellClicked = () => {
      editConfig.onEditCellClicked(event as any, row, {
        ...rowProps,
        columnIndex: cellNumber,
        elementId
      });
    };
  }

  // give priority to fire onChange/onBlur callbacks

  setTimeout(() => {
    if (!row.isEditing) {
      onRowClick(event, row, rowProps, computedData);
      if (onEditCellClicked) {
        // edit cell after rerender
        setTimeout(onEditCellClicked, 0);
      }
    } else if (onEditCellClicked) {
      onEditCellClicked();
    }
  }, 0);
};

export interface EditConfig {
  editConfirmationType?: typeof TableEditConfirmation | keyof typeof TableEditConfirmation;
  onEditCellClicked?: (value: React.MouseEvent, row: IRowData, extra: IEditedCellData) => void;
  onEditConfirmed?: (value: React.MouseEvent, row: IRowData, rowProps: IExtraRowData) => void;
  onEditCanceled?: (value: React.MouseEvent, row: IRowData, rowProps: IExtraRowData) => void;
}

export interface InlineEditBodyProps extends TableBodyProps {
  editConfig: EditConfig;
}

export interface BodyProps extends TableBodyProps {
  BodyComponent: typeof TableBody;
  editConfig: EditConfig;
}

interface ExtendedIRow extends IRow {
  editConfig: EditConfig;
  isTableEditing: boolean;
}

export const Body = ({ BodyComponent, rows = [], editConfig, onRowClick = () => {}, ...props }: BodyProps) => {
  const isTableEditing = rows.some(row => row.isEditing);
  const mappedRows = rows.map(row => ({
    ...row,
    editConfig,
    isTableEditing
  })) as ExtendedIRow[];

  resolveCascadeEditability(mappedRows);

  return (
    <BodyComponent
      {...props}
      rows={mappedRows}
      onRowClick={(event, row, rowProps, computedData) =>
        onRow(event, row, rowProps, computedData, { onRowClick, editConfig })
      }
    />
  );
};
