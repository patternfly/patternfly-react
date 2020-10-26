import * as React from 'react';

export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of list description */
  children: React.ReactNode;
  /** Additional classes added to the DescriptionListDescription */
  className?: string;
}

export const MenuList: React.FunctionComponent<MenuListProps> = ({
  children = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  ...props
}: MenuListProps) => (
  <div className={'pf-c-menu__content'}>
    <ul className={'pf-c-menu__list'} {...props}>
      {children}
    </ul>
  </div>
);
MenuList.displayName = 'MenuList';
