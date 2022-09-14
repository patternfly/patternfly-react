import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxHeaderProps {
  /** Content rendered inside the modal box header. */
  children?: React.ReactNode;
  /** Additional classes added to the modal box header. */
  className?: string;
  /** Optional help section for the modal box header. */
  help?: React.ReactNode;
}

export const ModalBoxHeader: React.FunctionComponent<ModalBoxHeaderProps> = ({
  children = null,
  className = '',
  help = null,
  ...props
}: ModalBoxHeaderProps) => (
  <header className={css(styles.modalBoxHeader, help && styles.modifiers.help, className)} {...props}>
    {help && (
      <React.Fragment>
        <div className={css(styles.modalBoxHeaderMain)}>{children}</div>
        <div className="pf-c-modal-box__header-help">{help}</div>
      </React.Fragment>
    )}
    {!help && children}
  </header>
);
ModalBoxHeader.displayName = 'ModalBoxHeader';
