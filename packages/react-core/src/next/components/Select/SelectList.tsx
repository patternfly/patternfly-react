import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuListProps, MenuList } from '../../../components/Menu';

export interface SelectListProps extends MenuListProps {
  /** Anything which can be rendered in a select list */
  children: React.ReactNode;
  /** Classes applied to root element of select list */
  className?: string;
  /** @beta Indicates to assistive technologies whether more than one item can be selected
   * for a non-checkbox select.
   */
  isAriaMultiselectable?: boolean;
}

export const SelectList: React.FunctionComponent<MenuListProps> = ({
  children,
  className,
  isAriaMultiselectable = false,
  ...props
}: SelectListProps) => (
  <MenuList isAriaMultiselectable={isAriaMultiselectable} className={css(className)} {...props}>
    {children}
  </MenuList>
);
SelectList.displayName = 'SelectList';
