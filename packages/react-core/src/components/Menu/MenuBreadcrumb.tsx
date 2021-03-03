import React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuBreadcrumbProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'ref' | 'onSelect'> {
  /** Items within drilldown sub-menu */
  children?: React.ReactNode;
}

export const MenuBreadcrumb: React.FunctionComponent<MenuBreadcrumbProps> = ({
  children,
  ...props
}: MenuBreadcrumbProps) => (
  <li className={css(styles.menuBreadcrumb)} {...props}>
    {children}
  </li>
);

MenuBreadcrumb.displayName = 'MenuBreadcrumb';
