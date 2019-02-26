import React from 'react';
import { TableContext, TableBody } from '@patternfly/react-table';

import PropTypes from 'prop-types';
import { TableEditConfirmation } from './constants';

const propTypes = {
  ...TableBody.propTypes,
  editConfig: PropTypes.shape({
    editConfirmationType: PropTypes.oneOf(Object.values(TableEditConfirmation)),
    onEditCellChanged: PropTypes.func,
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

const onRow = (event, row, rowProps, computedData, { onRowClick, editConfig }) => {
  const cell = event.target.closest('[data-key]');
  const cellNumber = parseInt(cell && cell.getAttribute('data-key'));
  const hasCellNumber = !Number.isNaN(cellNumber);

  let onEditCellChanged;
  let targetsAlreadyEditedCell = false;

  if (hasCellNumber && editConfig && typeof editConfig.onEditCellChanged === 'function') {
    targetsAlreadyEditedCell = cellNumber === row.activeEditCell;
    onEditCellChanged = () => {
      editConfig.onEditCellChanged(event, row, {
        ...rowProps,
        columnIndex: cellNumber
      });
    };
  }

  // give priority to fire onChange/onBlur callbacks

  setTimeout(() => {
    if (!row.isEditing) {
      onRowClick(event, row, rowProps, computedData);
      if (onEditCellChanged) {
        // edit cell after rerender
        setTimeout(onEditCellChanged, 0);
      }
    } else if (onEditCellChanged && !targetsAlreadyEditedCell) {
      onEditCellChanged();
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
