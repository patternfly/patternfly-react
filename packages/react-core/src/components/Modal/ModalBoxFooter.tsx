import { ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxFooterProps {
  /** Content rendered inside the modal box footer. */
  children?: ReactNode;
  /** Additional classes added to the modal box footer. */
  className?: string;
}

export const ModalBoxFooter: FunctionComponent<ModalBoxFooterProps> = ({
  children = null,
  className = '',
  ...props
}: ModalBoxFooterProps) => (
  <footer {...props} className={css(styles.modalBoxFooter, className)}>
    {children}
  </footer>
);
ModalBoxFooter.displayName = 'ModalBoxFooter';
