import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

export interface EmptyStateBodyProps extends React.HTMLProps<HTMLParagraphElement> {
  /** Content rendered inside the EmptyState */
  children?: React.ReactNode;
  /** Additional classes added to the EmptyState */
  className?: string;
}

export const EmptyStateBody: React.FunctionComponent<EmptyStateBodyProps> = ({
  children,
  className = '',
  ...props
}: EmptyStateBodyProps) => (
  <p className={css(styles.emptyStateBody, className)} {...props}>
    {children}
  </p>
);
