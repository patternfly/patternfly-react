import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuListProps, MenuList } from '../../../components/Menu';

export interface DropdownListProps extends MenuListProps {
  /** Anything which can be rendered in a dropdown list */
  children: React.ReactNode;
  /** Classes applied to root element of dropdown list */
  className?: string;
}

export const DropdownList: React.FunctionComponent<MenuListProps> = ({
  children,
  className,
  ...props
}: DropdownListProps) => (
  <MenuList className={css(className)} {...props}>
    {children}
  </MenuList>
);
DropdownList.displayName = 'DropdownList';
