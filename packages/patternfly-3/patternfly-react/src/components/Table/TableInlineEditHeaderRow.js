import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

const TableInlineEditHeaderRow = props => {
  const buttonsPosition = (window, rowDimensions) => {
    const position = {};

    position.bottom = window.height - rowDimensions.bottom - 3;
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  const buttonsClassName = 'top bold';

  const rowProps = {
    ...props,
    buttonsPosition,
    buttonsClassName
  };

  return <TableConfirmButtonsRow {...rowProps} />;
};

TableInlineEditHeaderRow.shouldComponentUpdate = true;

TableInlineEditHeaderRow.defaultProps = {
  ...TableConfirmButtonsRow.defaultProps
};

TableInlineEditHeaderRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};

export default TableInlineEditHeaderRow;
