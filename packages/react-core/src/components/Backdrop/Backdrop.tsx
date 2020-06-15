import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the backdrop */
  children?: React.ReactNode;
  /** additional classes added to the button */
  className?: string;
}

/**
 *
 */
export function Backdrop({ children = null, className = '', ...props }: BackdropProps) {
  return (
    <div {...props} className={css(styles.backdrop, className)}>
      {children}
    </div>
  );
}
