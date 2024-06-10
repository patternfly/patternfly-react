import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuContext } from './MenuContext';

export interface MenuListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of menu list */
  children: React.ReactNode;
  /** Additional classes added to the menu list */
  className?: string;
  /** Indicates to assistive technologies whether more than one item can be selected
   * for a non-checkbox menu. Only applies when the menu's role is "listbox".
   */
  isAriaMultiselectable?: boolean;
  /** Adds an accessible name to the menu. */
  'aria-label'?: string;
}

export const MenuList: React.FunctionComponent<MenuListProps> = ({
  children = null,
  className,
  isAriaMultiselectable = false,
  'aria-label': ariaLabel,
  ...props
}: MenuListProps) => {
  const { role } = React.useContext(MenuContext);

  return (
    <ul
      role={role}
      {...(role === 'listbox' && { 'aria-multiselectable': isAriaMultiselectable })}
      className={css(styles.menuList, className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </ul>
  );
};
MenuList.displayName = 'MenuList';
