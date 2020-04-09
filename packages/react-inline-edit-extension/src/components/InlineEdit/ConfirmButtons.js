import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import '@patternfly/react-styles/css/components/Table/inline-edit.css';
import { inlineEditStyles as styles } from './css/inline-edit-css';

const buttonsTopPosition = (window, rowDimensions, bold) => {
  const boldShift = bold ? -1 : 0;
  return {
    bottom: window.height - rowDimensions.top - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

const buttonsBottomPosition = (window, rowDimensions, bold) => {
  const boldShift = bold ? -1 : 0;
  return {
    top: rowDimensions.bottom - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

export const ConfirmButtons = ({
  messages: { confirmButtonLabel, cancelButtonLabel },
  onConfirm,
  onCancel,
  environment,
  buttonsOnTop,
  boldBorder
}) => {
  if (environment == null) {
    return null;
  }
  const { window, row } = environment;

  const positionStyle = buttonsOnTop
    ? buttonsTopPosition(window, row, boldBorder)
    : buttonsBottomPosition(window, row, boldBorder);

  const className = css(
    styles.tableInlineEditButtons,
    buttonsOnTop ? styles.modifiers.top : styles.modifiers.bottom,
    boldBorder && styles.modifiers.bold
  );

  return (
    <div style={positionStyle} className={className} key="confirmButtons">
      <ConfirmButton key="confirm" aria-label={confirmButtonLabel} onMouseUp={onConfirm} />
      <CancelButton key="cancel" aria-label={cancelButtonLabel} onMouseUp={onCancel} />
    </div>
  );
};

ConfirmButtons.defaultProps = {
  onConfirm: () => undefined,
  onCancel: () => undefined,
  buttonsOnTop: false,
  boldBorder: false,
  environment: undefined,
  messages: {
    confirmButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel'
  }
};

ConfirmButtons.propTypes = {
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Inject confirm buttons positions */
  environment: PropTypes.shape({
    window: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    row: PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number
    })
  }),
  buttonsOnTop: PropTypes.bool,
  boldBorder: PropTypes.bool,
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};
