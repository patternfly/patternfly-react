import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItemProps, MenuItem } from '../../../components/Menu';

export interface DropdownItemProps extends Omit<MenuItemProps, 'ref'> {
  /** Anything which can be rendered in a dropdown item */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Description of the dropdown item */
  description?: React.ReactNode;
}

export const DropdownItem: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  description,
  ...props
}: DropdownItemProps) => (
  <MenuItem className={css(className)} description={description} {...props}>
    {children}
  </MenuItem>
);
DropdownItem.displayName = 'DropdownItem';
