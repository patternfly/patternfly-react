import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateActionsProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state actions */
  children?: ReactNode;
  /** Additional classes added to the empty state actions */
  className?: string;
}

export const EmptyStateActions: FunctionComponent<EmptyStateActionsProps> = ({
  children,
  className,
  ...props
}: EmptyStateActionsProps) => (
  <div className={css(styles.emptyStateActions, className)} {...props}>
    {children}
  </div>
);
EmptyStateActions.displayName = 'EmptyStateActions';
