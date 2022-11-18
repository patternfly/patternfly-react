import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { DropdownContext } from '../Dropdown';
import { DropdownWithContext } from '../Dropdown/DropdownWithContext';
import { OUIAProps, useOUIAId } from '../../helpers';
import { ToggleMenuBaseProps } from '../../helpers/Popper/Popper';

export enum OptionsMenuPosition {
  right = 'right',
  left = 'left'
}

export enum OptionsMenuDirection {
  up = 'up',
  down = 'down'
}

export interface OptionsMenuProps
  extends Omit<ToggleMenuBaseProps, 'menuAppendTo'>,
    React.HTMLProps<HTMLDivElement>,
    OUIAProps {
  /** Classes applied to root element of the options menu */
  className?: string;
  /** Id of the root element of the options menu */
  id: string;
  /** Array of OptionsMenuItem and/or OptionMenuGroup nodes that will be rendered in the options menu list */
  menuItems: React.ReactNode[];
  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the options menu */
  toggle: React.ReactElement;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if toggle is textual toggle */
  isText?: boolean;
  /** Flag to indicate if menu is groupped */
  isGrouped?: boolean;
  /** Indicates where menu will be aligned horizontally */
  position?: 'right' | 'left';
  /** Menu will open up or open down from the options menu toggle */
  direction?: 'up' | 'down';
  /** The container to append the menu to. Defaults to 'inline'.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
  /** @beta Opt-in for updated popper that does not use findDOMNode. */
  removeFindDomNode?: boolean;
  /** z-index of the options menu when menuAppendTo is not inline. */
  zIndex?: number;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const OptionsMenu: React.FunctionComponent<OptionsMenuProps> = ({
  className = '',
  menuItems,
  toggle,
  isText = false,
  isGrouped = false,
  id,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  menuAppendTo = 'inline',
  ouiaId,
  ouiaSafe = true,
  removeFindDomNode = false,
  zIndex = 9999,
  ...props
}: OptionsMenuProps) => (
  <DropdownContext.Provider
    value={{
      id,
      onSelect: () => undefined,
      toggleIndicatorClass: styles.optionsMenuToggleIcon,
      toggleTextClass: styles.optionsMenuToggleText,
      menuClass: styles.optionsMenuMenu,
      itemClass: styles.optionsMenuMenuItem,
      toggleClass: isText ? styles.optionsMenuToggleButton : styles.optionsMenuToggle,
      baseClass: styles.optionsMenu,
      disabledClass: styles.modifiers.disabled,
      menuComponent: isGrouped ? 'div' : 'ul',
      baseComponent: 'div',
      ouiaId: useOUIAId(OptionsMenu.displayName, ouiaId),
      ouiaSafe,
      ouiaComponentType: OptionsMenu.displayName
    }}
  >
    <DropdownWithContext
      id={id}
      dropdownItems={menuItems}
      className={className}
      isGrouped={isGrouped}
      toggle={toggle}
      menuAppendTo={menuAppendTo}
      removeFindDomNode={removeFindDomNode}
      zIndex={zIndex}
      {...props}
    />
  </DropdownContext.Provider>
);
OptionsMenu.displayName = 'OptionsMenu';
