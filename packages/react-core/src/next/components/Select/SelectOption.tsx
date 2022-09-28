import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItemProps, MenuItem } from '../../../components/Menu';

export interface SelectOptionProps extends Omit<MenuItemProps, 'ref'> {
  /** Anything which can be rendered in a select option */
  children?: React.ReactNode;
  /** Classes applied to root element of select option */
  className?: string;
  /** Identifies the component in the Menu onSelect or onActionClick callback */
  itemId?: any;
  /** Flag indicating the option has a checkbox */
  hasCheck?: boolean;
  /** Render option as disabled */
  isDisabled?: boolean;
  /** Flag indicating if the option is selected */
  isSelected?: boolean;
  /** Flag indicating the option is focused */
  isFocused?: boolean;
}

export const SelectOption: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  ...props
}: SelectOptionProps) => (
  <MenuItem className={css(className)} {...props}>
    {children}
  </MenuItem>
);
SelectOption.displayName = 'SelectOption';
