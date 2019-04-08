import * as React from 'react';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Breadcrumb/breadcrumb.css';
import { css, getModifier } from '@patternfly/react-styles';

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  isActive?: boolean;
  target?: string;
  component?: React.ReactType<BreadcrumbItemProps>;
}

export const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({
  children = null,
  className = '',
  to = null,
  isActive = false,
  target = null,
  component = 'a',
  ...props
}) => (
  <li {...props} className={css(styles.breadcrumbItem, className)}>
    {to && (
      <React.Component
        href={to}
        target={target}
        className={css(styles.breadcrumbLink, isActive ? getModifier(styles, 'current') : '')}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </React.Component>
    )}
    {!to && <React.Fragment>{children}</React.Fragment>}
    {!isActive && (
      <span className={css(styles.breadcrumbItemDivider)}>
        <AngleRightIcon />
      </span>
    )}
  </li>
);
