import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateFooterProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state footer */
  children?: ReactNode;
  /** Additional classes added to the empty state footer */
  className?: string;
}

export const EmptyStateFooter: FunctionComponent<EmptyStateFooterProps> = ({
  children,
  className,
  ...props
}: EmptyStateFooterProps) => (
  <div className={css(styles.emptyStateFooter, className)} {...props}>
    {children}
  </div>
);
EmptyStateFooter.displayName = 'EmptyStateFooter';
