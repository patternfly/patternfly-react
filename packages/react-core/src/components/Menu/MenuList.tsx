import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of menu list */
  children: React.ReactNode;
  /** Additional classes added to the menu list */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuListBase: React.FunctionComponent<MenuListProps> = ({
  children = null,
  className,
  innerRef,
  ...props
}: MenuListProps) => (
  <ul className={css(styles.menuList, className)} ref={innerRef} {...props}>
    {children}
  </ul>
);

export const MenuList = React.forwardRef((props: MenuListProps, ref: React.Ref<HTMLUListElement>) => (
  <MenuListBase {...props} innerRef={ref} />
));
MenuList.displayName = 'MenuList';
