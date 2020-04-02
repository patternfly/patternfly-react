import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxFooterProps {
  /** Content rendered inside the Footer */
  children?: React.ReactNode;
  /** Additional classes added to the Footer */
  className?: string;
  /** Flag to align buttons to the right */
  isRightAligned?: boolean;
}

export const ModalBoxFooter: React.FunctionComponent<ModalBoxFooterProps> = ({
  children = null,
  className = '',
  isRightAligned = false,
  ...props
}: ModalBoxFooterProps) => (
  <div {...props} className={css(styles.modalBoxFooter, !isRightAligned && styles.modifiers.alignLeft, className)}>
    {children}
  </div>
);
