import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';

export enum OptionsMenuPosition {
  right = 'right',
  left = 'left'
}

export enum OptionsMenuDirection {
  up = 'up',
  down = 'down'
}

export interface OptionsMenuProps extends React.HTMLProps<HTMLDivElement>{
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
  /** Provides an accessible name for the Options menu */
  ariaLabelMenu?: string;
  /** Indicates where menu will be aligned horizontally */
  position?:  'right' | 'left';
  /** Menu will open up or open down from the Options menu toggle */
  direction?:  'up' | 'down';
}

export const OptionsMenu: React.FunctionComponent<OptionsMenuProps> = ({
  className = '',
  isOpen = false,
  isPlain = false,
  ariaLabelMenu = '',
  direction = OptionsMenuDirection.down,
  position = OptionsMenuPosition.left,
  id,
  menuItems,
  toggle,
  ...props
}: OptionsMenuProps) => (
  <div id={id}
       className={
         css(styles.optionsMenu,
           direction === OptionsMenuDirection.up && getModifier(styles, 'top'),
           position === OptionsMenuPosition.right && getModifier(styles, 'align-right'),
           isOpen && getModifier(styles, 'expanded'),
           className)}
       {...props}>
    {React.Children.map(toggle, oneToggle =>
      React.cloneElement(oneToggle, {
        parentId: id,
        isOpen,
        isPlain,
      }))}
    {isOpen &&
    <ul className={css(styles.optionsMenuMenu,
      position === OptionsMenuPosition.right && getModifier(styles, 'align-right'))}
        {...ariaLabelMenu ? {'aria-label': ariaLabelMenu} : {'aria-labelledby': `${id}-toggle`}}>
      {menuItems}
    </ul>}
  </div>
);
