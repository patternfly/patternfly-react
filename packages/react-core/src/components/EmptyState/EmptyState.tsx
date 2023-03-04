import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  'xs' = 'xs',
  sm = 'sm',
  lg = 'lg',
  'xl' = 'xl',
  full = 'full'
}

export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the empty state */
  className?: string;
  /** Content rendered inside the empty state */
  children: React.ReactNode;
  /** Modifies empty state max-width and sizes of icon, title and body */
  variant?: 'xs' | 'sm' | 'lg' | 'xl' | 'full';
  /** Cause component to consume the available height of its container */
  isFullHeight?: boolean;
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className,
  variant = EmptyStateVariant.full,
  isFullHeight,
  ...props
}: EmptyStateProps) => (
  <div
    className={css(
      styles.emptyState,
      variant === 'xs' && styles.modifiers.xs,
      variant === 'sm' && styles.modifiers.sm,
      variant === 'lg' && styles.modifiers.lg,
      variant === 'xl' && styles.modifiers.xl,
      isFullHeight && styles.modifiers.fullHeight,
      className
    )}
    {...props}
  >
    <div className={css(styles.emptyStateContent)}>{children}</div>
  </div>
);
EmptyState.displayName = 'EmptyState';
