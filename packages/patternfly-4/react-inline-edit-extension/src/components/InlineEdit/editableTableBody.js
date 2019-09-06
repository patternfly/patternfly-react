import React from 'react';
import { TableContext, TableBody, isRowExpanded } from '@patternfly/react-table';

import PropTypes from 'prop-types';
import { TableEditConfirmation } from './constants';
import { showIdWarnings } from './utils/utils';

const propTypes = {
  ...TableBody.propTypes,
  editConfig: PropTypes.shape({
    editConfirmationType: PropTypes.oneOf(Object.values(TableEditConfirmation)),
    onEditCellClicked: PropTypes.func,
    onEditConfirmed: PropTypes.func,
    onEditCanceled: PropTypes.func
  }).isRequired,
  /** Function that is fired when user clicks on a row if not editing.  */
  onRowClick: PropTypes.func
};

const defaultProps = {
  ...TableBody.defaultProps,
  editConfig: null,
  onRowClick: () => undefined
};

const resolveCascadeEditability = rows => {
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

const onRow = (event, row, rowProps, computedData, { onRowClick, editConfig }) => {
  const { target } = event;
  const cell = target.closest('[data-key]');
  const cellNumber = parseInt(cell && cell.getAttribute('data-key'), 10);
  const hasCellNumber = !Number.isNaN(cellNumber);

  let onEditCellClicked;

  if (hasCellNumber && editConfig && typeof editConfig.onEditCellClicked === 'function') {
    // resolve closest (e.g. for dropdowns) usable id of a clicked element inside a cell
    const idElement = target.closest('[id]');
    const elementId = idElement && cell.contains(idElement) ? idElement.getAttribute('id') || null : null;

    if (!elementId) {
      showIdWarnings(row, target);
    }

    onEditCellClicked = () => {
      editConfig.onEditCellClicked(event, row, {
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

const Body = ({ BodyComponent, rows, editConfig, onRowClick, ...props }) => {
  const isTableEditing = rows.some(row => row.isEditing);
  const mappedRows = rows.map(row => ({
    ...row,
    editConfig,
    isTableEditing
  }));

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

Body.propTypes = {
  BodyComponent: PropTypes.any.isRequired,
  rows: PropTypes.array,
  editConfig: PropTypes.any,
  onRowClick: PropTypes.func
};

Body.defaultProps = {
  rows: [],
  editConfig: null,
  onRowClick: () => undefined
};

const editableTableBody = BodyComponent => {
  const InlineEditBody = ({ editConfig, onRowClick, ...props }) => (
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

  InlineEditBody.propTypes = propTypes;
  InlineEditBody.defaultProps = defaultProps;

  return InlineEditBody;
};

export default editableTableBody;
