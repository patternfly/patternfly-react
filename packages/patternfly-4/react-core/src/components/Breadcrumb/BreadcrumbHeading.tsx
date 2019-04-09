import * as React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbHeadingProps extends React.HTMLProps<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  target?: string;
  component?: string;
}

export const BreadcrumbHeading: React.FunctionComponent<BreadcrumbHeadingProps> = ({
  children = null,
  className = '',
  to = null,
  target = null,
  component: Component = 'a',
  ...props
}) => {

  let Heading;
  if (to) {
    Heading = React.createElement(Component, {
      href: to,
      target: target,
      className: css(styles.breadcrumbLink, styles.modifiers.current),
    }, children);
  } else {
    Heading = <React.Fragment>{children}</React.Fragment>
  }

  return (
    <li {...props} className={css(styles.breadcrumbItem, className)}>
      <h1 className={css(styles.breadcrumbHeading)}>
        <Heading />
      </h1>
    </li>
  );
}
