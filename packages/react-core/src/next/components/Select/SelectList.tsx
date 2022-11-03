import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuListProps, MenuList } from '../../../components/Menu';

export interface SelectListProps extends MenuListProps {
  /** Anything which can be rendered in a select list */
  children: React.ReactNode;
  /** Classes applied to root element of select list */
  className?: string;
}

export const SelectList: React.FunctionComponent<MenuListProps> = ({
  children,
  className,
  ...props
}: SelectListProps) => (
  <MenuList className={css(className)} {...props}>
    {children}
  </MenuList>
);
SelectList.displayName = 'SelectList';
