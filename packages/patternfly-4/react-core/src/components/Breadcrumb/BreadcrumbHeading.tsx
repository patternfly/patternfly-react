import * as React from 'react';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbHeadingProps extends React.HTMLProps<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  target?: string;
  component?: React.ReactType<BreadcrumbHeadingProps>;
}

export const BreadcrumbHeading: React.FunctionComponent<BreadcrumbHeadingProps> = ({
  children = null,
  className = '',
  to = null,
  target = null,
  component: Component = 'a',
  ...props
}) => (
    <li {...props} className={css(styles.breadcrumbItem, className)}>
      <h1 className={css(styles.breadcrumbHeading)}>
        {to && (
          <Component
            href={to}
            target={target}
            className={css(styles.breadcrumbLink, styles.modifiers.current)}
            aria-current="page"
          >
            {children}
          </Component>
        )}
        {!to && <React.Fragment>{children}</React.Fragment>}
      </h1>
    </li>
  );
