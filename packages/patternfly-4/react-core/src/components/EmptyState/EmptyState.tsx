import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export enum EmptyStateVariant {
  large = 'large',
  small = 'small',
  full = 'full'
}

const maxWidthModifiers: { [variant in keyof typeof EmptyStateVariant]: string } = {
  large: 'lg',
  small: 'sm',
  full: ''
};

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
  const maxWidthModifier = maxWidthModifiers[variant];
  return (
    <div className={css(styles.emptyState, getModifier(styles, maxWidthModifier, null), className)} {...props}>
      {children}
    </div>
  );
};
