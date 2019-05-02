import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

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
  variant?: EmptyStateVariant;
}

const maxWidthModifiers = {
  large: styles.modifiers.lg,
  small: styles.modifiers.sm,
  full: null
}

export const EmptyState: React.FunctionComponent<EmptyStateProps> = ({
  children,
  className = '',
  variant = EmptyStateVariant.large,
  ...props
}) => {
  const maxWidthModifier = variant && maxWidthModifiers[variant];
  return (
    <div className={css(styles.emptyState, maxWidthModifier && maxWidthModifier, className)} {...props}>
      {children}
    </div>
  );
}
