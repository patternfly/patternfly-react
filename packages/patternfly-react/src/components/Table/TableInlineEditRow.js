import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

const TableInlineEditRow = props => {
  const buttonsPosition = (window, rowDimensions) => {
    const position = {};

    if (props.last) {
      position.bottom = window.height - rowDimensions.top - 1;
    } else {
      position.top = rowDimensions.bottom - 1;
    }
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  const buttonsClassName = props.last ? 'top' : 'bottom';

  return <TableConfirmButtonsRow {...props} buttonsPosition={buttonsPosition} buttonsClassName={buttonsClassName} />;
};

TableInlineEditRow.shouldComponentUpdate = true;

TableInlineEditRow.defaultProps = {
  ...TableConfirmButtonsRow.defaultProps,
  last: false
};

TableInlineEditRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Flag to indicate last row */
  last: PropTypes.bool,
  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};

export default TableInlineEditRow;
