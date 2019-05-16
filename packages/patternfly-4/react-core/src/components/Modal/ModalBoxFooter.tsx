import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/ModalBox/modal-box.css';

export interface ModalBoxFooterProps {
  /** content rendered inside the Footer */
  children?: React.ReactNode;
  /** additional classes added to the Footer */
  className?: string;
}

export const ModalBoxFooter: React.FunctionComponent<ModalBoxFooterProps> = ({
  children = null,
  className = '',
  ...props
}) => (
  <div {...props} className={css(styles.modalBoxFooter, className)}>
    {children}
  </div>
);

export default ModalBoxFooter;
