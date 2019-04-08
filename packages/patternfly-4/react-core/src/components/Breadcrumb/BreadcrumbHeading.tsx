import * as React from 'react';
import styles from '@patternfly/patternfly/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbHeadingProps extends React.HTMLProps<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  target?: string;
  component?: React.ReactType<BreadcrumbHeadingProps>;
}

const BreadcrumbHeading: React.FunctionComponent<BreadcrumbHeadingProps> = ({
  children = null,
  className = '',
  to = '',
  target = '',
  component = null,
  ...props
}) => (
  <nav {...props} className={css(styles.breadcrumb, className)}>
    <ol className={css(styles.breadcrumbList)}>{children}</ol>
  </nav>
);

export default BreadcrumbHeading;
