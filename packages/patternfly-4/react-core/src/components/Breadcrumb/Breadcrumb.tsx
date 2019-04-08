import * as React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbProps extends React.HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = '',
  ...props
}) => (
  <nav {...props} className={css(styles.breadcrumb, className)}>
    <ol className={css(styles.breadcrumbList)}>{children}</ol>
  </nav>
);
