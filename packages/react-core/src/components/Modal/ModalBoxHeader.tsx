import * as React from 'react';

import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { css } from '@patternfly/react-styles';

export interface ModalBoxHeaderProps {
  /** Content rendered inside the Header */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
}

export const ModalBoxHeader: React.FunctionComponent<ModalBoxHeaderProps> = ({
  children = null,
  className = '',
  ...props
}: ModalBoxHeaderProps) => (
  <div className={css(styles.modalBoxTitle, className)} {...props}>
    {children}
  </div>
);
