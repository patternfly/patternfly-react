import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state actions */
  children?: React.ReactNode;
  /** Additional classes added to the empty state actions */
  className?: string;
}

export const EmptyStateActions: React.FunctionComponent<EmptyStateActionsProps> = ({
  children,
  className,
  ...props
}: EmptyStateActionsProps) => (
  <div className={css(styles.emptyStateActions, className)} {...props}>
    {children}
  </div>
);
EmptyStateActions.displayName = 'EmptyStateActions';
