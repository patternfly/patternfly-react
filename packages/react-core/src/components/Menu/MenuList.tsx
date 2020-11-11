import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of menu list */
  children: React.ReactNode;
}

export const MenuList: React.FunctionComponent<MenuListProps> = ({
  children = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  ...props
}: MenuListProps) => (
  <ul className={css(styles.menuList)} {...props}>
    {children}
  </ul>
);
MenuList.displayName = 'MenuList';
