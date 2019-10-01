import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from '../Dropdown';
import { DropdownWithContext } from '../Dropdown/DropdownWithContext';

export enum OptionsMenuPosition {
  right = 'right',
  left = 'left'
}

export enum OptionsMenuDirection {
  up = 'up',
  down = 'down'
}

export interface OptionsMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Options menu */
  className?: string;
  /** Id of the root element of the Options menu */
  id: string;
  /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
  menuItems: React.ReactNode[];
  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
  toggle: React.ReactElement;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if toggle is textual toggle */
  isText?: boolean;
  /** Flag to indicate if menu is groupped */
  isGrouped?: boolean;
  /** Provides an accessible name for the Options menu */
  ariaLabelMenu?: string;
  /** Indicates where menu will be aligned horizontally */
  position?: 'right' | 'left';
  /** Menu will open up or open down from the Options menu toggle */
  direction?: 'up' | 'down';
}

export const OptionsMenu: React.FunctionComponent<OptionsMenuProps> = ({
  className = '',
  menuItems,
  toggle,
  isText = false,
  isGrouped = false,
  id,
  ref,
  ...props
}: OptionsMenuProps) => (
  <DropdownContext.Provider
    value={{
      id,
      onSelect: () => undefined,
      toggleIconClass: styles.optionsMenuToggleIcon,
      toggleTextClass: styles.optionsMenuToggleText,
      menuClass: styles.optionsMenuMenu,
      itemClass: styles.optionsMenuMenuItem,
      toggleClass: isText ? styles.optionsMenuToggleButton : styles.optionsMenuToggle,
      baseClass: styles.optionsMenu,
      disabledClass: styles.modifiers.disabled,
      menuComponent: 'ul',
      baseComponent: 'div'
    }}
  >
    <DropdownWithContext
      {...props}
      id={id}
      dropdownItems={menuItems}
      className={className}
      isGrouped={isGrouped}
      toggle={toggle}
    />
  </DropdownContext.Provider>
);
