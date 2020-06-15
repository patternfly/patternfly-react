import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

/**
 *
 */
export function PopoverFooter({ children, className = '', ...props }: PopoverFooterProps) {
  return (
    <footer className={css(styles.popoverFooter, className)} {...props}>
      {children}
    </footer>
  );
}

export interface PopoverFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Popover Footer */
  className?: string;
  /** Footer node */
  children: React.ReactNode;
}
