import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface ModalBoxHeaderProps {
  /** Content rendered inside the Header */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
}

/**
 *
 */
export function ModalBoxHeader({ children = null, className = '', ...props }: ModalBoxHeaderProps) {
  return (
    <header className={css('pf-c-modal-box__header', className)} {...props}>
      {children}
    </header>
  );
}
