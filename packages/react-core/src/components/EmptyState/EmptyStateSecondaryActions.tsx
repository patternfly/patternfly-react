import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateSecondaryActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the EmptyState */
  children?: React.ReactNode;
  /** Additional classes added to the EmptyState */
  className?: string;
}
/**
 *
 */
export function EmptyStateSecondaryActions({
  children = null,
  className = '',
  ...props
}: EmptyStateSecondaryActionsProps) {
  return (
    <div className={css(styles.emptyStateSecondary, className)} {...props}>
      {children}
    </div>
  );
}
