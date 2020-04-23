import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  small = 'small',
  large = 'large',
  'xl' = 'xl',
  full = 'full'
}

export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the EmptyState */
  className?: string;
  /** Content rendered inside the EmptyState */
  children: React.ReactNode;
  /** Modifies EmptyState max-width */
  variant?: 'small' | 'large' | 'xl' | 'full';
  /** Cause component to consume the available height of its container */
  isFullHeight?: boolean;
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className = '',
  variant = EmptyStateVariant.full,
  isFullHeight,
  ...props
}: EmptyStateProps) => (
  <div
    className={css(
      styles.emptyState,
      variant === 'small' && styles.modifiers.sm,
      variant === 'large' && styles.modifiers.lg,
      variant === 'xl' && styles.modifiers.xl,
      isFullHeight && styles.modifiers.fullHeight,
      className
    )}
    {...props}
  >
    <div className={css(styles.emptyStateContent)}>{children}</div>
  </div>
);
