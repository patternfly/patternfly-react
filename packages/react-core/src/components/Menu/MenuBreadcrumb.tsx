import { HTMLAttributes, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuBreadcrumbProps extends Omit<HTMLAttributes<HTMLDivElement>, 'ref' | 'onSelect'> {
  /** Items within breadcrumb menu container */
  children?: ReactNode;
}

export const MenuBreadcrumb: FunctionComponent<MenuBreadcrumbProps> = ({ children, ...props }: MenuBreadcrumbProps) => (
  <div className={css(styles.menuBreadcrumb)} {...props}>
    {children}
  </div>
);

MenuBreadcrumb.displayName = 'MenuBreadcrumb';
