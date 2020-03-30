import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  full = 'full',
  small = 'small',
  large = 'large',
  'xl' = 'xl'
}

export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the EmptyState */
  className?: string;
  /** Content rendered inside the EmptyState */
  children: React.ReactNode;
  /** Modifies EmptyState max-width */
  variant?: 'full' | 'small' | 'large' | 'xl';
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className = '',
  variant = EmptyStateVariant.full,
  ...props
}: EmptyStateProps) => (
  <div
    className={css(
      styles.emptyState,
      variant === 'small' && styles.modifiers.sm,
      variant === 'large' && styles.modifiers.lg,
      variant === 'xl' && styles.modifiers.xl,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
