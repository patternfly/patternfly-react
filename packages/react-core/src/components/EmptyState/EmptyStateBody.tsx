import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateBodyProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state body */
  children?: ReactNode;
  /** Additional classes added to the empty state body */
  className?: string;
}

export const EmptyStateBody: FunctionComponent<EmptyStateBodyProps> = ({
  children,
  className,
  ...props
}: EmptyStateBodyProps) => (
  <div className={css(styles.emptyStateBody, className)} {...props}>
    {children}
  </div>
);
EmptyStateBody.displayName = 'EmptyStateBody';
