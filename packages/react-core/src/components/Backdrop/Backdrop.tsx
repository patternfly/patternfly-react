import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the backdrop */
  children?: React.ReactNode;
  /** Additional classes added to the backdrop */
  className?: string;
}

export const Backdrop: React.FunctionComponent<BackdropProps> = ({
  children = null,
  className = '',
  ...props
}: BackdropProps) => (
  <div {...props} className={css(styles.backdrop, className)}>
    {children}
  </div>
);
Backdrop.displayName = 'Backdrop';
