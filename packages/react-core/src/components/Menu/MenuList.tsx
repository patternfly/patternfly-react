import * as React from 'react';

export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of menu list */
  children: React.ReactNode;
  /** Additional classes added to the menu list */
  className?: string;
}

export const MenuList: React.FunctionComponent<MenuListProps> = ({
  children = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  ...props
}: MenuListProps) => (
  <ul className={'pf-c-menu__list'} {...props}>
    {children}
  </ul>
);
MenuList.displayName = 'MenuList';
