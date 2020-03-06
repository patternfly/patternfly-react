import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  large = 'large',
  small = 'small',
  full = 'full'
}

export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the EmptyState */
  className?: string;
  /** Content rendered inside the EmptyState */
  children: React.ReactNode;
  /** Modifies EmptyState max-width */
  variant?: 'small' | 'large' | 'full';
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className = '',
  variant = EmptyStateVariant.large,
  ...props
}: EmptyStateProps) => (
  <div
    className={css(
      styles.emptyState,
      variant === 'large' && styles.modifiers.lg,
      variant === 'small' && styles.modifiers.sm,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
