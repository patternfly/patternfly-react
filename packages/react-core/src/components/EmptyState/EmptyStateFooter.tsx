import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the EmptyStateFooter */
  children?: React.ReactNode;
  /** Additional classes added to the EmptyStateFooter */
  className?: string;
}

export const EmptyStateFooter: React.FunctionComponent<EmptyStateFooterProps> = ({
  children,
  className = '',
  ...props
}: EmptyStateFooterProps) => (
  <div className={css(styles.emptyStateFooter, className)} {...props}>
    {children}
  </div>
);
EmptyStateFooter.displayName = 'EmptyStateFooter';
