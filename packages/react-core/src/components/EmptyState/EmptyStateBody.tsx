import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the EmptyState */
  children?: React.ReactNode;
  /** Additional classes added to the EmptyState */
  className?: string;
}

/**
 *
 */
export function EmptyStateBody({ children, className = '', ...props }: EmptyStateBodyProps) {
  return (
    <div className={css(styles.emptyStateBody, className)} {...props}>
      {children}
    </div>
  );
}
