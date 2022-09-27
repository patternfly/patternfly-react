import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the modal box body. */
  children?: React.ReactNode;
  /** Additional classes added to the modal box body. */
  className?: string;
}

export const ModalBoxBody: React.FunctionComponent<ModalBoxBodyProps> = ({
  children = null,
  className = '',
  ...props
}: ModalBoxBodyProps) => (
  <div {...props} className={css(styles.modalBoxBody, className)}>
    {children}
  </div>
);
ModalBoxBody.displayName = 'ModalBoxBody';
