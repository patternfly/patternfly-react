import React from 'react';
import { css } from '@patternfly/react-styles';
import { CancelButton } from '../CancelButton';
import { ConfirmButton } from '../ConfirmButton';
import '@patternfly/react-styles/css/components/Table/inline-edit.css';
import { inlineEditStyles as styles } from '../InlineEdit/css/inline-edit-css';
import { WindowDimensions, ClientBoundingRect } from '../../utils';

const buttonsTopPosition = (window: WindowDimensions, rowDimensions: ClientBoundingRect, bold: boolean) => {
  const boldShift = bold ? -1 : 0;
  return {
    bottom: window.height - rowDimensions.top - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

const buttonsBottomPosition = (window: WindowDimensions, rowDimensions: ClientBoundingRect, bold: boolean) => {
  const boldShift = bold ? -1 : 0;
  return {
    top: rowDimensions.bottom - 1 + boldShift,
    right: window.width - rowDimensions.right + 10
  };
};

export interface Environment {
  window: WindowDimensions;
  row: ClientBoundingRect;
}

export interface ConfirmButtonProps {
  environment: Environment;
  buttonsOnTop?: boolean;
  boldBorder?: boolean;
  messages?: { confirmButtonLabel: string; cancelButtonLabel: string };
  onConfirm?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ConfirmButtons = ({
  messages: { confirmButtonLabel, cancelButtonLabel } = { confirmButtonLabel: 'Save', cancelButtonLabel: 'Cancel' },
  onConfirm = () => {},
  onCancel = () => {},
  environment,
  buttonsOnTop = false,
  boldBorder = false
}: ConfirmButtonProps) => {
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
