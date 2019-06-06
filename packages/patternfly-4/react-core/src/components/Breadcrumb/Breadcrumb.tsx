import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbProps extends React.HTMLProps<HTMLElement> {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children?: React.ReactNode;
  /** Additional classes added to the breadcrumb nav. */
  className?: string;
  /** Aria label added to the breadcrumb nav. */
  'aria-label'?: string;
}

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = 'Breadcrumb',
  ...props
}: BreadcrumbProps) => (
  <nav {...props} aria-label={ariaLabel} className={css(styles.breadcrumb, className)}>
    <ol className={css(styles.breadcrumbList)}>{children}</ol>
  </nav>
);
