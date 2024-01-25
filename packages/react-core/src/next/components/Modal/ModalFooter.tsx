import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

/** Renders content in the footer of the modal */

export interface ModalFooterProps {
  /** Content rendered inside the modal footer. */
  children?: React.ReactNode;
  /** Additional classes added to the modal footer. */
  className?: string;
}

export const ModalFooter: React.FunctionComponent<ModalFooterProps> = ({
  children,
  className,
  ...props
}: ModalFooterProps) => (
  <footer {...props} className={css(styles.modalBoxFooter, className)}>
    {children}
  </footer>
);
ModalFooter.displayName = 'ModalFooter';
