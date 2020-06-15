import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the CardHeader */
  children?: React.ReactNode;
  /** Additional classes added to the CardHeader */
  className?: string;
}

/**
 *
 */
export function CardHeader({ children = null, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={css(styles.cardHeader, className)} {...props}>
      {children}
    </div>
  );
}
