import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  large = 'large',
  small = 'small',
  full = 'full',
};

export enum maxWidthModifiers {
  large = 'styles.modifiers.lg',
  small = 'styles.modifiers.sm'
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
}: EmptyStateProps) => {
  const maxWidthModifier = variant && maxWidthModifiers[variant as keyof typeof maxWidthModifiers];
  return (
    <div className={css(styles.emptyState, maxWidthModifier, className)} {...props}>
      {children}
    </div>
  );
}
